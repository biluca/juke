import { SpotifyDevice } from '../../domain/user/model/device.model';
import { UserGateway } from '../../domain/user/user.gateway';
export declare class SpotifyUserService implements UserGateway {
    private access_token;
    setAccessToken(access_token: any): void;
    getUser(): Promise<any>;
    devices(): Promise<SpotifyDevice[]>;
    private convertSpotifyResponseToDeviceList;
}
