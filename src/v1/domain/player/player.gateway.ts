
export interface PlayerGateway {
    play(): Promise<any>;
    pause(): Promise<any>;
    next(): Promise<any>;
    previous(): Promise<any>;
}
