export declare class SpotifyQueueService {
    private access_token;
    setAccessToken(access_token: any): void;
    addToQueue(trackURI: string): Promise<any>;
}
