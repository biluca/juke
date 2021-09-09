export interface SearchGateway {
    search(filter: string): Promise<any>;
}
