import { Injectable } from '@nestjs/common';
import { PlayerGateway } from '../../domain/player/player.gateway'
import spotify_config from '../../../config/spotify.config';
import errorsCollection from '../../commons/errors.collection';
import AsyncRequest from '../../commons/async-request.commons';
import { GenericError } from 'src/v1/commons/model/generic-error.model';

@Injectable()
export class SpotifyPlayerService implements PlayerGateway {

    private access_token = '';

    setAccessToken(access_token) {
        this.access_token = access_token;
    }

    async play(): Promise<any> {

        try {

            let httpMethod = spotify_config.endpoints.play.method;
            let uri = spotify_config.endpoints.play.uri;

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
                }
            };

            const response = await AsyncRequest.request(options);
            return response;

        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.player.ERROR_ON_PLAY, error.message);
        }


    }
    async pause(): Promise<any> {
        try {
            let httpMethod = spotify_config.endpoints.pause.method;
            let uri = spotify_config.endpoints.pause.uri;

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
                }
            };

            const response = await AsyncRequest.request(options);
            return response;
        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.player.ERROR_ON_PAUSE, error.message);
        }

    }
    async next(): Promise<any> {
        try {
            let httpMethod = spotify_config.endpoints.next.method;
            let uri = spotify_config.endpoints.next.uri;

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
                }
            };

            const response = await AsyncRequest.request(options);
            return response;
        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.player.ERROR_ON_NEXT, error.message);
        }
    }
    async previous(): Promise<any> {
        try {
            let httpMethod = spotify_config.endpoints.previous.method;
            let uri = spotify_config.endpoints.previous.uri;

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
                }
            };

            const response = await AsyncRequest.request(options);
            return response;
        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.player.ERROR_ON_PREVIOUS, error.message);
        }

    }

}
