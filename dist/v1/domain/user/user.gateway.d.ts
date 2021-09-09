export interface UserGateway {
    getUser(): Promise<any>;
    devices(): Promise<any>;
}
