"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyUserService = void 0;
const common_1 = require("@nestjs/common");
const generic_error_model_1 = require("../../commons/model/generic-error.model");
const spotify_config_1 = require("../../../config/spotify.config");
const errors_collection_1 = require("../../commons/errors.collection");
const async_request_commons_1 = require("../../commons/async-request.commons");
const spotify_device_converter_1 = require("./spotify-device.converter");
let SpotifyUserService = class SpotifyUserService {
    constructor() {
        this.access_token = '';
    }
    setAccessToken(access_token) {
        this.access_token = access_token;
    }
    async getUser() {
        try {
            let httpMethod = spotify_config_1.default.endpoints.user.method;
            let uri = spotify_config_1.default.endpoints.user.uri;
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
            const response = await async_request_commons_1.default.spotifyRequest(options);
            return response;
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.user.ERRO_ON_DEVICES, error.message);
        }
    }
    async devices() {
        try {
            let httpMethod = spotify_config_1.default.endpoints.devices.method;
            let uri = spotify_config_1.default.endpoints.devices.uri;
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
            const response = await async_request_commons_1.default.spotifyRequest(options);
            const devicesList = this.convertSpotifyResponseToDeviceList(response);
            return devicesList;
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.user.ERRO_ON_DEVICES, error.message);
        }
    }
    convertSpotifyResponseToDeviceList(response) {
        const convertedDevicesList = spotify_device_converter_1.SpotifyDeviceConverter.convertDeviceList(response);
        return {
            statusCode: 200,
            body: convertedDevicesList
        };
    }
};
SpotifyUserService = __decorate([
    common_1.Injectable()
], SpotifyUserService);
exports.SpotifyUserService = SpotifyUserService;
//# sourceMappingURL=spotify-user.service.js.map