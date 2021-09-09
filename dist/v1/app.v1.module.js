"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModuleV1 = void 0;
const common_1 = require("@nestjs/common");
const authentication_controller_1 = require("./controller/authentication/authentication.controller");
const user_controller_1 = require("./controller/user/user.controller");
const player_controller_1 = require("./controller/player/player.controller");
const search_controller_1 = require("./controller/search/search.controller");
const queue_manager_controller_1 = require("./controller/queue-manager/queue-manager.controller");
const spotify_authentication_service_1 = require("./service/spotify-authentication/spotify-authentication.service");
const spotify_user_service_1 = require("./service/spotify-user/spotify-user.service");
const spotify_player_service_1 = require("./service/spotify-player/spotify-player.service");
const spotify_search_service_1 = require("./service/spotify-search/spotify-search.service");
const queue_manager_service_1 = require("./service/queue-manager/queue-manager.service");
const spotify_queue_service_1 = require("./service/spotify-queue/spotify-queue.service");
const mongoose_1 = require("@nestjs/mongoose");
const queue_item_model_1 = require("./domain/queue-manager/model/queue-item.model");
let AppModuleV1 = class AppModuleV1 {
};
AppModuleV1 = __decorate([
    common_1.Module({
        'imports': [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://contratex:IhReIPL81jVLToSZ@cluster0.2lii7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }),
            mongoose_1.MongooseModule.forFeature([{ name: 'QueueItem', schema: queue_item_model_1.QueueItemSchema }]),
        ],
        'controllers': [
            user_controller_1.UserController,
            authentication_controller_1.AuthenticationController,
            player_controller_1.PlayerController,
            search_controller_1.SearchController,
            queue_manager_controller_1.QueueManagerController
        ],
        'providers': [
            spotify_authentication_service_1.SpotifyAuthenticationService,
            spotify_player_service_1.SpotifyPlayerService,
            spotify_user_service_1.SpotifyUserService,
            spotify_search_service_1.SpotifySearchService,
            queue_manager_service_1.QueueManagerService,
            spotify_queue_service_1.SpotifyQueueService
        ],
    })
], AppModuleV1);
exports.AppModuleV1 = AppModuleV1;
//# sourceMappingURL=app.v1.module.js.map