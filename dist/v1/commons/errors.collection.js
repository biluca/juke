"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    errors: {
        player: {
            ERROR_ON_PLAY: "Something went wrong on the Play Method!",
            ERROR_ON_PAUSE: "Something went wrong on the Pause Method!",
            ERROR_ON_NEXT: "Something went wrong on the Next Method!",
            ERROR_ON_PREVIOUS: "Something went wrong on the Previous Method!",
        },
        authentication: {
            GET_ACCESS_TOKEN_BY_AUTHORIZATION: "Something went wrong try getting the Access Token by User Authorization",
            GET_ACCESS_TOKEN_BY_REFRESH_TOKEN: "Something went wrong try getting the Access Token by Refresh Token",
            STATE_VALIDATION_MISMATCH: " Mismatch on the State Validation!"
        },
        user: {
            ERRO_ON_DEVICES: "Error on the Devices Method!"
        },
        search: {
            ERROR_ON_SEARCH: "Something went Wrong try to Search for a Items on Spotify",
            INVALID_FILTER: "You must input a Valid Filter"
        },
        queue_manager: {
            ERROR_ON_INSERT_QUEUE_ITEM: "Something went Wrong on Inserting a Queue Item on MongoDB",
            ERROR_ON_GETTING_PENDINGS_QUEUE_ITEM: "Something went Wrong on Getting the Pending Items on MongoDB",
            ERROR_ON_GETTING_ANALYSING_QUEUE: "Something went Wrong on Analysing the Queue",
        },
        spotify_queue: {
            ERROR_ON_INSERT_SPOTIFY_QUEUE_ITEM: "Something went Wrong on Inserting a Queue Item on Spotify Queue"
        },
    }
};
//# sourceMappingURL=errors.collection.js.map