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
exports.QueueManagerController = void 0;
const common_1 = require("@nestjs/common");
const controller_commons_1 = require("../../commons/controller.commons");
const queue_manager_service_1 = require("../../service/queue-manager/queue-manager.service");
const queue_manager_usecase_1 = require("../../domain/queue-manager/queue-manager.usecase");
let QueueManagerController = class QueueManagerController extends controller_commons_1.GenericController {
    constructor(queueManagerService) {
        super();
        this.queueManagerService = queueManagerService;
        this.queueManagerCase = new queue_manager_usecase_1.QueueManagerCase(this.queueManagerService);
    }
    async play(req, res, body) {
        const result = this.queueManagerCase.addItem(body);
        return this.resolveResponse(res, result);
    }
    async getQueue(req, res, status) {
        const access_token = this.getSpotifyAccessToken(req);
        this.queueManagerService.setAccessToken(access_token);
        const result = this.queueManagerCase.getQueue(status);
        return this.resolveResponse(res, result);
    }
    async analyseQueue(req, res) {
        const access_token = this.getSpotifyAccessToken(req);
        this.queueManagerService.setAccessToken(access_token);
        const result = this.queueManagerCase.analyse();
        return this.resolveResponse(res, result);
    }
};
__decorate([
    common_1.Post('add'),
    __param(0, common_1.Req()), __param(1, common_1.Res()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], QueueManagerController.prototype, "play", null);
__decorate([
    common_1.Get('get-queue'),
    __param(0, common_1.Req()), __param(1, common_1.Res()), __param(2, common_1.Query('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], QueueManagerController.prototype, "getQueue", null);
__decorate([
    common_1.Get('analyse'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], QueueManagerController.prototype, "analyseQueue", null);
QueueManagerController = __decorate([
    common_1.Controller('queue-manager'),
    __metadata("design:paramtypes", [queue_manager_service_1.QueueManagerService])
], QueueManagerController);
exports.QueueManagerController = QueueManagerController;
//# sourceMappingURL=queue-manager.controller.js.map