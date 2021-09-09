import { Module } from '@nestjs/common';

// Controllers
import { AuthenticationController } from './controller/authentication/authentication.controller';
import { UserController } from './controller/user/user.controller'
import { PlayerController } from './controller/player/player.controller';
import { SearchController } from './controller/search/search.controller';
import { QueueManagerController } from './controller/queue-manager/queue-manager.controller';


// Services
import { SpotifyAuthenticationService } from './service/spotify-authentication/spotify-authentication.service';
import { SpotifyUserService } from './service/spotify-user/spotify-user.service';
import { SpotifyPlayerService } from './service/spotify-player/spotify-player.service';
import { SpotifySearchService } from './service/spotify-search/spotify-search.service';
import { QueueManagerService } from './service/queue-manager/queue-manager.service';
import { SpotifyQueueService } from './service/spotify-queue/spotify-queue.service';

// Extra Modules
import { MongooseModule } from '@nestjs/mongoose';

// Schemas
import { QueueItemSchema } from './domain/queue-manager/model/queue-item.model';



@Module({
  'imports': [
    MongooseModule.forRoot('mongodb+srv://contratex:IhReIPL81jVLToSZ@cluster0.2lii7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }),
    MongooseModule.forFeature([{ name: 'QueueItem', schema: QueueItemSchema }]),
  ],
  'controllers': [
    UserController,
    AuthenticationController,
    PlayerController,
    SearchController,
    QueueManagerController],
  'providers': [
    SpotifyAuthenticationService,
    SpotifyPlayerService,
    SpotifyUserService,
    SpotifySearchService,
    QueueManagerService,
    SpotifyQueueService],
})
export class AppModuleV1 { }
