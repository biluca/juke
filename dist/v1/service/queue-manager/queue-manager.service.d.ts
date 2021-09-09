import { QueueItem } from 'src/v1/domain/queue-manager/model/queue-item.model';
import { QueueManagerGateway } from 'src/v1/domain/queue-manager/queue-manager.gateway';
import { Model } from 'mongoose';
import { SpotifyQueueService } from '../spotify-queue/spotify-queue.service';
export declare class QueueManagerService implements QueueManagerGateway {
    private readonly queueItemModel;
    private readonly spotifyQueueService;
    constructor(queueItemModel: Model<QueueItem>, spotifyQueueService: SpotifyQueueService);
    private access_token;
    setAccessToken(access_token: any): void;
    addItem(queueItem: QueueItem): Promise<any>;
    getQueue(status: string): Promise<{
        statusCode: number;
        body: any;
    }>;
    analyse(): Promise<{
        statusCode: number;
        body: {};
    }>;
    private getQueueByStatus;
}
