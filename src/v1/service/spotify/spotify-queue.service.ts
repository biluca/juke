import { Injectable } from '@nestjs/common';
import spotify_config from '../../../config/spotify.config';
import errorsCollection from '../../commons/errors.collection';
import AsyncRequest from '../../commons/async-request.commons';
import { GenericError } from 'src/v1/commons/model/generic-error.model';


@Injectable()
export class SpotifyQueueService {

    private access_token = '';

    setAccessToken(access_token) {
        this.access_token = access_token;
    }

    async addToQueue(trackURI: string) {

        try {

            let httpMethod = spotify_config.endpoints.queue.method;
            let uri = spotify_config.endpoints.queue.uri;

            const options = {
                method: httpMethod,
                uri,
                resolveWithFullResponse: true,
                json: true,
                simple: false,
                rejectUnauthorized: false,
                headers: {
                    'Authorization': 'Bearer ' + this.access_token,
                    'Content-Type': 'application/json'
                },
                qs: {
                    uri: trackURI
                }
            };

            const response = await AsyncRequest.request(options);
            return response;

        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.spotify_queue.ERROR_ON_INSERT_SPOTIFY_QUEUE_ITEM, error.message);
        }

    }

}
