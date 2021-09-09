"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyQueueService = void 0;
const common_1 = require("@nestjs/common");
const spotify_config_1 = require("../../../config/spotify.config");
const errors_collection_1 = require("../../commons/errors.collection");
const async_request_commons_1 = require("../../commons/async-request.commons");
const generic_error_model_1 = require("../../commons/model/generic-error.model");
let SpotifyQueueService = class SpotifyQueueService {
    constructor() {
        this.access_token = '';
    }
    setAccessToken(access_token) {
        this.access_token = access_token;
    }
    async addToQueue(trackURI) {
        try {
            let httpMethod = spotify_config_1.default.endpoints.queue.method;
            let uri = spotify_config_1.default.endpoints.queue.uri;
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
            const response = await async_request_commons_1.default.request(options);
            return response;
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.spotify_queue.ERROR_ON_INSERT_SPOTIFY_QUEUE_ITEM, error.message);
        }
    }
};
SpotifyQueueService = __decorate([
    common_1.Injectable()
], SpotifyQueueService);
exports.SpotifyQueueService = SpotifyQueueService;
//# sourceMappingURL=spotify-queue.service.js.map