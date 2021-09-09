"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    cookie_state_key: 'spotify_auth_state',
    nounce_state_key_lenght: 32,
    endpoints: {
        authorize: {
            uri: 'https://accounts.spotify.com/authorize?'
        },
        token: {
            uri: 'https://accounts.spotify.com/api/token',
            method: 'POST'
        },
        user: {
            uri: 'https://api.spotify.com/v1/me',
            method: 'GET'
        },
        devices: {
            uri: 'https://api.spotify.com/v1/me/player/devices',
            method: 'GET'
        },
        play: {
            uri: 'https://api.spotify.com/v1/me/player/play',
            method: 'PUT'
        },
        pause: {
            uri: 'https://api.spotify.com/v1/me/player/pause',
            method: 'PUT'
        },
        next: {
            uri: 'https://api.spotify.com/v1/me/player/next',
            method: 'POST'
        },
        previous: {
            uri: 'https://api.spotify.com/v1/me/player/previous',
            method: 'POST'
        },
        search: {
            uri: 'https://api.spotify.com/v1/search',
            method: 'GET',
            items_type: 'track'
        },
        queue: {
            uri: 'https://api.spotify.com/v1/me/player/queue',
            method: 'POST',
        }
    },
};
//# sourceMappingURL=spotify.config.js.map