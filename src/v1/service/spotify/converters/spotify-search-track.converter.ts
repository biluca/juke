import { SpotifyTrack } from "src/v1/domain/search/model/spotify-track.model";

export class SpotifySearchTrackConverter {

    async convertCollection(trackResultsResponse: any): Promise<SpotifyTrack[]> {

        let convertedTrackList: SpotifyTrack[] = [];
        const tracksList = trackResultsResponse.tracks.items;

        tracksList.forEach(track => {

            this.convertTrack(track).then(result =>{
                convertedTrackList.push(result);
            });

        });

        convertedTrackList.sort((a, b) => {
            return SpotifyTrack.sortByPopularity(a, b)
        });

        return convertedTrackList;
    }

    async convertTrack(track: any): Promise<SpotifyTrack> {

        const convertedSpotifyTrack: SpotifyTrack = new SpotifyTrack();
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