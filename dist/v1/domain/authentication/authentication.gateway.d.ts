export interface AuthenticationGateway {
    buildSpotifyRedirectionURL(state: string): string;
    callback(code: any, request: any): any;
    refresh(): any;
}
