import { GenericController } from '../../commons/controller.commons';
import { SpotifyUserService } from '../../service/spotify-user/spotify-user.service';
import { Request, Response } from 'express';
export declare class UserController extends GenericController {
    private readonly spotifyUserService;
    private readonly userUseCase;
    constructor(spotifyUserService: SpotifyUserService);
    getUser(req: Request, res: Response): any;
    getDevices(req: Request, res: Response): any;
}
