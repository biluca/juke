import { PlayerGateway } from './player.gateway'
import { HttpResponse } from "../../commons/model/http.model"

export class PlayerUseCase {

    private playerGateway: PlayerGateway;

    constructor(playerGateway: PlayerGateway) {
        this.playerGateway = playerGateway;
    }

    async play(): Promise<HttpResponse> {
        return await this.playerGateway.play();
    }


    async pause(): Promise<any> {
        return this.playerGateway.pause();
    }

    async next(): Promise<any> {
        return this.playerGateway.next();
    }

    async previous(): Promise<any> {
        return this.playerGateway.previous();
    }
}
