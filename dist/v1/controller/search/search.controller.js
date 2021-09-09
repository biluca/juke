"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const controller_commons_1 = require("../../commons/controller.commons");
const spotify_search_service_1 = require("../../service/spotify-search/spotify-search.service");
const search_usecase_1 = require("../../domain/search/search.usecase");
let SearchController = class SearchController extends controller_commons_1.GenericController {
    constructor(spotifySearchService) {
        super();
        this.spotifySearchService = spotifySearchService;
        this.searchUseCase = new search_usecase_1.SearchUseCase(this.spotifySearchService);
    }
    search(req, res, filter) {
        const access_token = this.getSpotifyAccessToken(req);
        this.spotifySearchService.setAccessToken(access_token);
        const result = this.searchUseCase.search(filter);
        return this.resolveResponse(res, result);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()), __param(2, common_1.Query('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "search", null);
SearchController = __decorate([
    common_1.Controller('search'),
    __metadata("design:paramtypes", [spotify_search_service_1.SpotifySearchService])
], SearchController);
exports.SearchController = SearchController;
//# sourceMappingURL=search.controller.js.map