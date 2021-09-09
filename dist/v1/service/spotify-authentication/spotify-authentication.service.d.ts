import { AuthenticationGateway } from '../../domain/authentication/authentication.gateway';
export declare class SpotifyAuthenticationService implements AuthenticationGateway {
    private refresh_token;
    setRefreshToken(refresh_token: any): void;
    buildSpotifyRedirectionURL(state: string): string;
    callback(code: any): Promise<any>;
    refresh(): Promise<any>;
}
