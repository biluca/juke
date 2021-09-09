import { SearchGateway } from 'src/v1/domain/search/search.gateway';
export declare class SporifySearchService implements SearchGateway {
    private access_token;
    setAccessToken(access_token: any): void;
    search(filter: string): Promise<any>;
}
