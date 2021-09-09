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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueManagerService = void 0;
const common_1 = require("@nestjs/common");
const queue_item_model_1 = require("../../domain/queue-manager/model/queue-item.model");
const queue_manager_gateway_1 = require("../../domain/queue-manager/queue-manager.gateway");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const errors_collection_1 = require("../../commons/errors.collection");
const spotify_queue_service_1 = require("../spotify-queue/spotify-queue.service");
const generic_error_model_1 = require("../../commons/model/generic-error.model");
let QueueManagerService = class QueueManagerService {
    constructor(queueItemModel, spotifyQueueService) {
        this.queueItemModel = queueItemModel;
        this.spotifyQueueService = spotifyQueueService;
        this.access_token = '';
    }
    setAccessToken(access_token) {
        this.access_token = access_token;
    }
    async addItem(queueItem) {
        try {
            const newQueueItem = new this.queueItemModel({
                track_id: queueItem.track_id,
                track_name: queueItem.track_name,
                user_id: queueItem.user_id,
                status: "PENDING",
            });
            const result = await newQueueItem.save();
            return {
                statusCode: 200,
                body: result._doc
            };
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.queue_manager.ERROR_ON_INSERT_QUEUE_ITEM, error.message);
        }
    }
    async getQueue(status) {
        try {
            const pendingItems = await this.getQueueByStatus(status);
            const pendingItemsMap = pendingItems.map(pendingItem => ({
                id: pendingItem.id,
                track_id: pendingItem.track_id,
                track_name: pendingItem.track_name,
                status: pendingItem.status,
            }));
            return {
                statusCode: 200,
                body: pendingItemsMap
            };
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.queue_manager.ERROR_ON_GETTING_PENDINGS_QUEUE_ITEM, error.message);
        }
    }
    async analyse() {
        try {
            this.spotifyQueueService.setAccessToken(this.access_token);
            const pendingItems = await this.getQueueByStatus('PENDING');
            pendingItems.forEach(async (track) => {
                const result = await this.spotifyQueueService.addToQueue(track.track_id);
                track.status = "ON QUEUE";
                await track.save();
            });
            return {
                statusCode: 204,
                body: {}
            };
        }
        catch (error) {
            throw new generic_error_model_1.GenericError(error.status, errors_collection_1.default.errors.queue_manager.ERROR_ON_GETTING_PENDINGS_QUEUE_ITEM, error.message);
        }
    }
    async getQueueByStatus(status) {
        return await this.queueItemModel.find({ 'status': status }).exec();
    }
};
QueueManagerService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('QueueItem')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, spotify_queue_service_1.SpotifyQueueService])
], QueueManagerService);
exports.QueueManagerService = QueueManagerService;
//# sourceMappingURL=queue-manager.service.js.map