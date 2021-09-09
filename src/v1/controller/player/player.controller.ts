import { Controller, Get, Req, Res } from '@nestjs/common';
import { GenericController } from '../../commons/controller.commons'
import { SpotifyPlayerService } from '../../service/spotify-player/spotify-player.service'
import { PlayerUseCase } from '../../domain/player/player.usecase'
import { Request, Response } from 'express'
import { HttpResponse } from "../../commons/model/http.model"

@Controller('player')
export class PlayerController extends GenericController {
    
    private readonly playerUseCase = new PlayerUseCase(this.spotifyPlayerService);

    constructor(private readonly spotifyPlayerService: SpotifyPlayerService) {
        super();
    }

    @Get('play')
    async play(@Req() req: Request, @Res() res: Response): Promise<HttpResponse> {
        const access_token = this.getSpotifyAccessToken(req);
        this.spotifyPlayerService.setAccessToken(access_token);

        const result = this.playerUseCase.play();
        return this.resolveResponse(res, result);
    }


    @Get('pause')
    pause(@Req() req: Request, @Res() res: Response) {
        const access_token = this.getSpotifyAccessToken(req);
        this.spotifyPlayerService.setAccessToken(access_token);

        const result = this.playerUseCase.pause();
        return this.resolveResponse(res, result);
    }

    @Get('next')
    next(@Req() req: Request, @Res() res: Response) {
        const access_token = this.getSpotifyAccessToken(req);
        this.spotifyPlayerService.setAccessToken(access_token);

        const result = this.playerUseCase.next();
        return this.resolveResponse(res, result);
    }

    @Get('previous')
    pervious(@Req() req: Request, @Res() res: Response) {
        const access_token = this.getSpotifyAccessToken(req);
        this.spotifyPlayerService.setAccessToken(access_token);

        const result = this.playerUseCase.previous();
        return this.resolveResponse(res, result);
    }

}
