import { PlayerGateway } from './player.gateway';
import { HttpResponse } from "../../commons/model/http.model";
export declare class PlayerUseCase {
    private playerGateway;
    constructor(playerGateway: PlayerGateway);
    play(): Promise<HttpResponse>;
    pause(): Promise<any>;
    next(): Promise<any>;
    previous(): Promise<any>;
}
