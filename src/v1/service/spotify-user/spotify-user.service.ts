import { Injectable } from '@nestjs/common';
import { SpotifyDevice, SpotifyDeviceSchema } from '../../domain/user/model/device.model'
import { UserGateway } from '../../domain/user/user.gateway'
import { GenericError } from "../../commons/model/generic-error.model"
import spotify_config from '../../../config/spotify.config';
import errorsCollection from '../../commons/errors.collection';
import AsyncRequest from '../../commons/async-request.commons';
import { SpotifyDeviceConverter } from './spotify-device.converter';

@Injectable()
export class SpotifyUserService implements UserGateway {

    private access_token = '';

    setAccessToken(access_token) {
        this.access_token = access_token;
    }

    async getUser(): Promise<any> {
        try {

            let httpMethod = spotify_config.endpoints.user.method;
            let uri = spotify_config.endpoints.user.uri;

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

            const response = await AsyncRequest.spotifyRequest(options);

            return response;

        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.user.ERRO_ON_DEVICES, error.message);
        }
    }

    async devices(): Promise<SpotifyDevice[]> {

        try {

            let httpMethod = spotify_config.endpoints.devices.method;
            let uri = spotify_config.endpoints.devices.uri;

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

            const response = await AsyncRequest.spotifyRequest(options);
            const devicesList = this.convertSpotifyResponseToDeviceList(response);

            return devicesList;

        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.user.ERRO_ON_DEVICES, error.message);
        }

    }

    private convertSpotifyResponseToDeviceList(response: any): any {

        const convertedDevicesList = SpotifyDeviceConverter.convertDeviceList(response);

        return {
            statusCode: 200,
            body: convertedDevicesList
        }

    }

}


