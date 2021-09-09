import { HttpResponse } from 'src/v1/commons/model/http.model';
import { SearchGateway } from './search.gateway';
export declare class SearchUseCase {
    private searchGateway;
    constructor(searchGateway: SearchGateway);
    search(filter: string): Promise<HttpResponse>;
    formatFilter(filter: string): string;
    validateFiler(filter: string): void;
}
