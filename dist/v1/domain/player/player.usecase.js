"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerUseCase = void 0;
class PlayerUseCase {
    constructor(playerGateway) {
        this.playerGateway = playerGateway;
    }
    async play() {
        return await this.playerGateway.play();
    }
    async pause() {
        return this.playerGateway.pause();
    }
    async next() {
        return this.playerGateway.next();
    }
    async previous() {
        return this.playerGateway.previous();
    }
}
exports.PlayerUseCase = PlayerUseCase;
//# sourceMappingURL=player.usecase.js.map