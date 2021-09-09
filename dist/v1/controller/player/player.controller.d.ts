import { GenericController } from '../../commons/controller.commons';
import { SpotifyPlayerService } from '../../service/spotify-player/spotify-player.service';
import { Request, Response } from 'express';
import { HttpResponse } from "../../commons/model/http.model";
export declare class PlayerController extends GenericController {
    private readonly spotifyPlayerService;
    private readonly playerUseCase;
    constructor(spotifyPlayerService: SpotifyPlayerService);
    play(req: Request, res: Response): Promise<HttpResponse>;
    pause(req: Request, res: Response): any;
    next(req: Request, res: Response): any;
    pervious(req: Request, res: Response): any;
}
