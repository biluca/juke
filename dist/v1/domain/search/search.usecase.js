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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchUseCase = void 0;
const common_1 = require("@nestjs/common");
const http_model_1 = require("../../commons/model/http.model");
const errors_collection_1 = require("../../commons/errors.collection");
const generic_error_model_1 = require("../../commons/model/generic-error.model");
let SearchUseCase = class SearchUseCase {
    constructor(searchGateway) {
        this.searchGateway = searchGateway;
    }
    async search(filter) {
        try {
            this.validateFiler(filter);
            filter = this.formatFilter(filter);
            return this.searchGateway.search(filter);
        }
        catch (error) {
            throw error;
        }
    }
    formatFilter(filter) {
        const splitedFilter = filter.split(" ");
        return splitedFilter.join('+');
    }
    validateFiler(filter) {
        if (filter === '' || filter === undefined) {
            throw new generic_error_model_1.GenericError(500, errors_collection_1.default.errors.search.INVALID_FILTER, "Validation Error");
        }
    }
};
SearchUseCase = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], SearchUseCase);
exports.SearchUseCase = SearchUseCase;
//# sourceMappingURL=search.usecase.js.map