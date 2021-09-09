import { GenericController } from '../../commons/controller.commons';
import { SpotifyAuthenticationService } from '../../service/spotify-authentication/spotify-authentication.service';
import { Request, Response } from 'express';
export declare class AuthenticationController extends GenericController {
    private readonly spotifyAuthenticationService;
    private readonly authenticationUseCase;
    constructor(spotifyAuthenticationService: SpotifyAuthenticationService);
    login(res: Response): void;
    callback(code: any, state: any, req: Request, res: Response): void;
    refresh(req: Request, res: Response): void;
    private resolveAccessTokenResult;
}
