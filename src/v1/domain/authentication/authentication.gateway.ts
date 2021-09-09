import { Request, Response } from 'express'

export interface AuthenticationGateway {
    buildSpotifyRedirectionURL(state: string): string;
    callback(code, request);
    refresh();
}
