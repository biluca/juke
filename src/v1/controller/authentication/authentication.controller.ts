import { Controller, Get, Query, Req, Res, } from '@nestjs/common';
import { GenericController } from '../../commons/controller.commons'
import { AuthenticationUseCase } from '../../domain/authentication/authentication.usecase'
import { SpotifyAuthenticationService } from '../../service/spotify/spotify-authentication.service'
import { Request, Response } from 'express'
import spotify_config from '../../../config/spotify.config';
import { request } from 'http';


const stateKey = spotify_config.cookie_state_key;

@Controller('auth')
export class AuthenticationController extends GenericController {

    private readonly authenticationUseCase = new AuthenticationUseCase(this.spotifyAuthenticationService);

    constructor(private readonly spotifyAuthenticationService: SpotifyAuthenticationService) {
        super();
    }

    @Get('login')
    login(@Res({ passthrough: true }) res: Response) {

        const state = this.generateNounceStateKey();
        const redirectionURI = this.authenticationUseCase.buildRedirectionUrl(state);
        res.cookie(stateKey, state);

        res.redirect(redirectionURI);
    }

    @Get('callback')
    callback(@Query('code') code, @Query('state') state, @Req() req: Request, @Res() res: Response) {

        const result = this.authenticationUseCase.callback(code, state, req);
        res.clearCookie(stateKey);

        this.resolveAccessTokenResult(res, result);

    }

    @Get('refresh')
    refresh(@Req() req: Request, @Res() res: Response) {
        const refreshToken = this.getSpotifyRefreshToken(req);
        this.spotifyAuthenticationService.setRefreshToken(refreshToken);

        const result = this.authenticationUseCase.refresh();
        this.resolveAccessTokenResult(res, result);

    }

    private resolveAccessTokenResult(res: Response, result) {

        result.then(response => {
            if (response.statusCode >= 200 && response.statusCode <= 299) {
                res.cookie('access_token', response.body.access_token);
                res.cookie('refresh_token', response.body.refresh_token);
                res.status(response.statusCode);
                res.send(response.body);
                return;
            }

            return res.status(response.statusCode).json({
                error: response.body
            });
        });

    }


}
