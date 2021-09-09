import { Injectable } from '@nestjs/common';
import { SearchGateway } from 'src/v1/domain/search/search.gateway';
import spotify_config from '../../../config/spotify.config';
import errorsCollection from '../../commons/errors.collection';
import AsyncRequest from '../../commons/async-request.commons';
import { SpotifySearchTrackConverter } from './spotify-search-track.converter';
import { GenericError } from 'src/v1/commons/model/generic-error.model';

@Injectable()
export class SpotifySearchService implements SearchGateway {

    private access_token = '';
    private spotifySearchTrackConverter = new SpotifySearchTrackConverter();

    setAccessToken(access_token) {
        this.access_token = access_token;
    }

    async search(filter: string): Promise<any> {
        try {

            let httpMethod = spotify_config.endpoints.search.method;
            let uri = spotify_config.endpoints.search.uri;
            let types = spotify_config.endpoints.search.items_type;

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
                    'q': filter,
                    'type': types,
                }
            };

            const response = await AsyncRequest.request(options);

            let convertedResponse = {}

            if (response.body.error) {
                convertedResponse = response.body;
            } else {
                convertedResponse = await this.spotifySearchTrackConverter.convertCollection(response.body);
            }

            return {
                statusCode: response.statusCode,
                body: convertedResponse
            }

        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.search.ERROR_ON_SEARCH, error.message);
        }
    }
}
