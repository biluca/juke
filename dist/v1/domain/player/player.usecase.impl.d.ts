import { PlayerUseCaseIterface } from './player.usecase.interface';
export declare class PlayerUseCaseImpl implements PlayerUseCaseIterface {
    private playerUseCaseService;
    constructor(playerUseCaseService: PlayerUseCaseIterface);
    play(): Promise<any>;
    pause(): Promise<any>;
    next(): Promise<any>;
    previous(): Promise<any>;
}
