"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyTrack = void 0;
class SpotifyTrack {
    static sortByPopularity(a, b) {
        return a.popularity < b.popularity ? 1 : -1;
    }
}
exports.SpotifyTrack = SpotifyTrack;
//# sourceMappingURL=spotify-track.model.js.map