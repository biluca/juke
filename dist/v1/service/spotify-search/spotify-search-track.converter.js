"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifySearchTrackConverter = void 0;
const spotify_track_model_1 = require("../../domain/search/model/spotify-track.model");
class SpotifySearchTrackConverter {
    async convertCollection(trackResultsResponse) {
        let convertedTrackList = [];
        const tracksList = trackResultsResponse.tracks.items;
        tracksList.forEach(track => {
            this.convertTrack(track).then(result => {
                convertedTrackList.push(result);
            });
        });
        convertedTrackList.sort((a, b) => {
            return spotify_track_model_1.SpotifyTrack.sortByPopularity(a, b);
        });
        return convertedTrackList;
    }
    async convertTrack(track) {
        const convertedSpotifyTrack = new spotify_track_model_1.SpotifyTrack();
        convertedSpotifyTrack.id = track.id;
        convertedSpotifyTrack.name = track.name;
        convertedSpotifyTrack.album = track.album.name;
        convertedSpotifyTrack.popularity = track.popularity;
        convertedSpotifyTrack.duration_ms = track.duration_ms;
        convertedSpotifyTrack.href = track.href;
        convertedSpotifyTrack.preview_url = track.preview_url;
        convertedSpotifyTrack.uri = track.uri;
        return convertedSpotifyTrack;
    }
}
exports.SpotifySearchTrackConverter = SpotifySearchTrackConverter;
//# sourceMappingURL=spotify-search-track.converter.js.map