"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyAuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const spotify_config_1 = require("../../../config/spotify.config");
const spotify_credentials_1 = require("../../../config/spotify.credentials");
const async_request_commons_1 = require("../../commons/async-request.commons");
const errors_collection_1 = require("../../commons/errors.collection");
const generic_error_model_1 = require("../../commons/model/generic-error.model");
const querystring = require('querystring');
let SpotifyAuthenticationService = class SpotifyAuthenticationService {
    constructor() {
        this.refresh_token = '';
    }
    setRefreshToken(refresh_token) {
        this.refresh_token = refresh_token;
    }
    buildSpotifyRedirectionURL(state) {
        const authorize_uri = spotify_config_1.default.endpoints.authorize.uri;
        const client_id = spotify_credentials_1.default.credentials.client_id;
        const redirect_uri = spotify_credentials_1.default.credentials.redirect_uri;
        const scope = spotify_credentials_1.default.credentials.scope;
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
            const httpMethod = spotify_config_1.default.endpoints.token.method;
            const uri = spotify_config_1.default.endpoints.token.uri;
            const redirect_uri = spotify_credentials_1.default.credentials.redirect_uri;
            const client_id = spotify_credentials_1.default.credentials.client_id;
            const client_secret = spotify_credentials_1.default.credentials.client_secret;
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
            const response = await async_request_commons_1.default.request(options);
            return response;
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.authentication.GET_ACCESS_TOKEN_BY_AUTHORIZATION, error.message);
        }
    }
    async refresh() {
        try {
            const httpMethod = spotify_config_1.default.endpoints.token.method;
            const uri = spotify_config_1.default.endpoints.token.uri;
            const client_id = spotify_credentials_1.default.credentials.client_id;
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
            const response = await async_request_commons_1.default.request(options);
            return response;
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.authentication.GET_ACCESS_TOKEN_BY_REFRESH_TOKEN, error.message);
        }
    }
};
SpotifyAuthenticationService = __decorate([
    common_1.Injectable()
], SpotifyAuthenticationService);
exports.SpotifyAuthenticationService = SpotifyAuthenticationService;
//# sourceMappingURL=spotify-authentication.service.js.map