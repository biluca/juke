import { Controller, Get, Req, Res } from '@nestjs/common';
import { GenericController } from '../../commons/controller.commons'
import { SpotifyUserService } from '../../service/spotify-user/spotify-user.service'
import { UserUseCase } from '../../domain/user/user.usecase'
import { Request, Response } from 'express'

@Controller('user')
export class UserController extends GenericController {

    private readonly userUseCase = new UserUseCase(this.spotifyUserService);

    constructor(private readonly spotifyUserService: SpotifyUserService) {
        super();
    }

    @Get()
    getUser(@Req() req: Request, @Res() res: Response) {
        let access_token = this.getSpotifyAccessToken(req);
        this.spotifyUserService.setAccessToken(access_token);

        const result = this.userUseCase.getUser();
        return this.resolveResponse(res, result);
    }

    @Get('devices')
    getDevices(@Req() req: Request, @Res() res: Response) {

        let access_token = this.getSpotifyAccessToken(req);
        this.spotifyUserService.setAccessToken(access_token);

        const result = this.userUseCase.devices();
        return this.resolveResponse(res, result);
    }


}
