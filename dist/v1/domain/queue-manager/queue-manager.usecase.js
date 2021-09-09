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
exports.QueueManagerCase = void 0;
const common_1 = require("@nestjs/common");
const http_model_1 = require("../../commons/model/http.model");
let QueueManagerCase = class QueueManagerCase {
    constructor(queueManagerGateway) {
        this.queueManagerGateway = queueManagerGateway;
    }
    async addItem(queueItem) {
        return this.queueManagerGateway.addItem(queueItem);
    }
    async getQueue(status) {
        return this.queueManagerGateway.getQueue(status);
    }
    async analyse() {
        return this.queueManagerGateway.analyse();
    }
};
QueueManagerCase = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], QueueManagerCase);
exports.QueueManagerCase = QueueManagerCase;
//# sourceMappingURL=queue-manager.usecase.js.map