"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericController = void 0;
const spotify_config_1 = require("../../config/spotify.config");
const nonceGenerator = require('nonce-generator');
class GenericController {
    constructor() {
        this.ACCESS_TOKEN_KEY = 'access_token';
        this.REFRESH_TOKEN_KEY = 'refresh_token';
    }
    resolveResponse(res, httpResponse) {
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
            .catch(error => {
            console.error(error);
            return res.status(error.statusCode).json(error);
        });
    }
    getSpotifyAccessToken(req) {
        let access_token = req.headers[this.ACCESS_TOKEN_KEY];
        if (!access_token) {
            access_token = req.cookies[this.ACCESS_TOKEN_KEY];
        }
        return access_token;
    }
    getSpotifyRefreshToken(req) {
        let refresh_token = req.headers[this.REFRESH_TOKEN_KEY];
        if (!refresh_token) {
            refresh_token = req.cookies[this.REFRESH_TOKEN_KEY];
        }
        return refresh_token;
    }
    generateNounceStateKey() {
        return nonceGenerator(spotify_config_1.default.nounce_state_key_lenght);
    }
}
exports.GenericController = GenericController;
//# sourceMappingURL=controller.commons.js.map