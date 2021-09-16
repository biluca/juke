import { Module } from '@nestjs/common';

// Controllers
import { AuthenticationController } from './controller/authentication/authentication.controller';
import { UserController } from './controller/user/user.controller'
import { PlayerController } from './controller/player/player.controller';
import { SearchController } from './controller/search/search.controller';
import { QueueManagerController } from './controller/queue-manager/queue-manager.controller';


// Services
import { SpotifyAuthenticationService } from './service/spotify/spotify-authentication.service';
import { SpotifyUserService } from './service/spotify/spotify-user.service';
import { SpotifyPlayerService } from './service/spotify/spotify-player.service';
import { SpotifySearchService } from './service/spotify/spotify-search.service';
import { SpotifyQueueService } from './service/spotify/spotify-queue.service';

@Module({
  'imports': [],
  'controllers': [
    UserController,
    AuthenticationController,
    PlayerController,
    SearchController,
  ],
  'providers': [
    SpotifyAuthenticationService,
    SpotifyPlayerService,
    SpotifyUserService,
    SpotifySearchService,
    SpotifyQueueService
  ],
})
export class AppModuleV1 { }
