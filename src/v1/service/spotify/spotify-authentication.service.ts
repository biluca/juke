import { Injectable } from '@nestjs/common';
import { AuthenticationGateway } from '../../domain/authentication/authentication.gateway'
import spotify_config from '../../../config/spotify.config';
import spotify_credentials from '../../../config/spotify.credentials';
import AsyncRequest from '../../commons/async-request.commons';
import errorsCollection from "../../commons/errors.collection"
import { GenericError } from 'src/v1/commons/model/generic-error.model';

const querystring = require('querystring');

@Injectable()
export class SpotifyAuthenticationService implements AuthenticationGateway {

    private refresh_token = '';

    setRefreshToken(refresh_token) {
        this.refresh_token = refresh_token;
    }

    buildSpotifyRedirectionURL(state: string) {
        const authorize_uri = spotify_config.endpoints.authorize.uri;
        const client_id = spotify_credentials.credentials.client_id
        const redirect_uri = spotify_credentials.credentials.redirect_uri
        const scope = spotify_credentials.credentials.scope;

        const queryParams = querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope.join('%20'),
            redirect_uri: redirect_uri,
            state: state
        });

        return authorize_uri + queryParams;

    }

    async callback(code) {

        try {
            const httpMethod = spotify_config.endpoints.token.method;
            const uri = spotify_config.endpoints.token.uri;

            const redirect_uri = spotify_credentials.credentials.redirect_uri
            const client_id = spotify_credentials.credentials.client_id
            const client_secret = spotify_credentials.credentials.client_secret

            const options = {
                method: httpMethod,
                uri,
                resolveWithFullResponse: true,
                json: true,
                simple: false,
                rejectUnauthorized: false,
                headers: {
                    'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                qs: {
                    grant_type: 'authorization_code',
                    code: code,
                    redirect_uri: redirect_uri,
                }
            };

            const response = await AsyncRequest.request(options);
            return response;

        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.authentication.GET_ACCESS_TOKEN_BY_AUTHORIZATION, error.message);
        }

    }

    async refresh() {

        try {
            const httpMethod = spotify_config.endpoints.token.method;
            const uri = spotify_config.endpoints.token.uri;
            const client_id = spotify_credentials.credentials.client_id

            const options = {
                method: httpMethod,
                uri,
                resolveWithFullResponse: true,
                json: true,
                simple: false,
                rejectUnauthorized: false,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                qs: {
                    grant_type: 'refresh_token',
                    refresh_token: this.refresh_token,
                    client_id: client_id,
                }
            };

            const response = await AsyncRequest.request(options);
            return response;

        } catch (error) {
            throw new GenericError(error.status, errorsCollection.errors.authentication.GET_ACCESS_TOKEN_BY_REFRESH_TOKEN, error.message);
        }
    }



}
