"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SporifySearchService = void 0;
const common_1 = require("@nestjs/common");
const search_gateway_1 = require("../../domain/search/search.gateway");
const spotify_config_1 = require("../../../config/spotify.config");
const errors_collection_1 = require("../../commons/errors.collection");
const async_request_commons_1 = require("../../commons/async-request.commons");
let SporifySearchService = class SporifySearchService {
    constructor() {
        this.access_token = '';
    }
    setAccessToken(access_token) {
        this.access_token = access_token;
    }
    async search(filter) {
        try {
            let httpMethod = spotify_config_1.default.endpoints.search.method;
            let uri = spotify_config_1.default.endpoints.search.uri;
            let types = spotify_config_1.default.endpoints.search.items_type;
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
                    q: filter,
                    type: types,
                }
            };
            const response = await async_request_commons_1.default.request(options);
            return response;
        }
        catch (error) {
            console.error(`Error: ${error}`);
            throw new Error(errors_collection_1.default.errors.search.ERROR_ON_SEARCH);
        }
    }
};
SporifySearchService = __decorate([
    common_1.Injectable()
], SporifySearchService);
exports.SporifySearchService = SporifySearchService;
//# sourceMappingURL=sporify-search.service.js.map