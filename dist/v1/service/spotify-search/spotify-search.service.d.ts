import { SearchGateway } from 'src/v1/domain/search/search.gateway';
export declare class SpotifySearchService implements SearchGateway {
    private access_token;
    private spotifySearchTrackConverter;
    setAccessToken(access_token: any): void;
    search(filter: string): Promise<any>;
}
