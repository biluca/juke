import { HttpResponse } from "./model/http.model"
import { Request, Response } from "express";
import spotify_config from '../../config/spotify.config';
import { GenericError } from "./model/generic-error.model";
const nonceGenerator = require('nonce-generator');

export abstract class GenericController {

    private readonly ACCESS_TOKEN_KEY = 'access_token';
    private readonly REFRESH_TOKEN_KEY = 'refresh_token';

    resolveResponse(res: Response, httpResponse: Promise<HttpResponse>): any {

        httpResponse.then(response => {

            if (response.file) {
                return res.status(response.statusCode).download(response.file);
            }

            if (response.statusCode >= 200 && response.statusCode <= 299) {
                const result = res.status(response.statusCode).json(response.body);
                return result;
            }

            
            return res.status(response.statusCode).json({ error: response.body });
        })
        .catch(error =>{
            console.error(error)
            return res.status(error.statusCode).json(error);
        });

    }

    getSpotifyAccessToken(req: Request) {
        let access_token = req.headers[this.ACCESS_TOKEN_KEY];
        if (!access_token) {
            access_token = req.cookies[this.ACCESS_TOKEN_KEY]
        }
        return access_token;
    }

    getSpotifyRefreshToken(req: Request) {
        let refresh_token = req.headers[this.REFRESH_TOKEN_KEY];
        if (!refresh_token) {
            refresh_token = req.cookies[this.REFRESH_TOKEN_KEY]
        }
        return refresh_token;
    }

    generateNounceStateKey() {
        return nonceGenerator(spotify_config.nounce_state_key_lenght);
    }

}