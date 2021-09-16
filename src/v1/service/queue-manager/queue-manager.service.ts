import { Injectable } from '@nestjs/common';
import { QueueItem } from 'src/v1/domain/queue-manager/model/queue-item.model';
import { QueueManagerGateway } from 'src/v1/domain/queue-manager/queue-manager.gateway';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import errorsCollection from 'src/v1/commons/errors.collection';
import { SpotifyQueueService } from '../spotify/spotify-queue.service';
import { GenericError } from 'src/v1/commons/model/generic-error.model';

@Injectable()
export class QueueManagerService implements QueueManagerGateway {

    constructor(@InjectModel('QueueItem') private readonly queueItemModel: Model<QueueItem>, private readonly spotifyQueueService: SpotifyQueueService) { }

    private access_token = '';

    setAccessToken(access_token) {
        this.access_token = access_token;
    }

    async addItem(queueItem: QueueItem): Promise<any> {

        try {

            const newQueueItem = new this.queueItemModel({
                track_id: queueItem.track_id,
                track_name: queueItem.track_name,
                user_id: queueItem.user_id,
                status: "PENDING",
            });

            const result = await newQueueItem.save();

            return {
                statusCode: 200,
                body: result._doc
            }

        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.queue_manager.ERROR_ON_INSERT_QUEUE_ITEM, error.message);
        }

    }

    async getQueue(status: string) {

        try {
            const pendingItems = await this.getQueueByStatus(status);

            const pendingItemsMap = pendingItems.map(pendingItem => ({
                id: pendingItem.id,
                track_id: pendingItem.track_id,
                track_name: pendingItem.track_name,
                status: pendingItem.status,
            }));

            return {
                statusCode: 200,
                body: pendingItemsMap
            }
        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.queue_manager.ERROR_ON_GETTING_PENDINGS_QUEUE_ITEM, error.message);
        }


    }

    async analyse() {

        try {
            this.spotifyQueueService.setAccessToken(this.access_token);
            const pendingItems = await this.getQueueByStatus('PENDING');

            pendingItems.forEach(async track => {
                const result = await this.spotifyQueueService.addToQueue(track.track_id);

                track.status = "ON QUEUE";
                await track.save();
            });


            return {
                statusCode: 204,
                body: {}
            }
        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.queue_manager.ERROR_ON_GETTING_PENDINGS_QUEUE_ITEM, error.message);
        }

    }

    private async getQueueByStatus(status: string){
        return await this.queueItemModel.find({ 'status': status }).exec();
    }
}
