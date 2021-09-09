import { SpotifyTrack } from "src/v1/domain/search/model/spotify-track.model";
export declare class SpotifySearchTrackConverter {
    convertCollection(trackResultsResponse: any): Promise<SpotifyTrack[]>;
    convertTrack(track: any): Promise<SpotifyTrack>;
}
