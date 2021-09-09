"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerUseCaseImpl = void 0;
class PlayerUseCaseImpl {
    constructor(playerUseCaseService) {
        this.playerUseCaseService = playerUseCaseService;
    }
    async play() {
        return this.playerUseCaseService.play();
    }
    async pause() {
        return this.playerUseCaseService.pause();
    }
    async next() {
        return this.playerUseCaseService.next();
    }
    async previous() {
        return this.playerUseCaseService.previous();
    }
}
exports.PlayerUseCaseImpl = PlayerUseCaseImpl;
//# sourceMappingURL=player.usecase.impl.js.map