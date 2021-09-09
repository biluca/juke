export interface PlayerUseCaseIterface {
    play(): Promise<any>;
    pause(): Promise<any>;
    next(): Promise<any>;
    previous(): Promise<any>;
}
