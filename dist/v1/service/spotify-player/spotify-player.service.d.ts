import { PlayerGateway } from '../../domain/player/player.gateway';
export declare class SpotifyPlayerService implements PlayerGateway {
    private access_token;
    setAccessToken(access_token: any): void;
    play(): Promise<any>;
    pause(): Promise<any>;
    next(): Promise<any>;
    previous(): Promise<any>;
}
