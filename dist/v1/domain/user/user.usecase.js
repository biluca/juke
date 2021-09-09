"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCase = void 0;
class UserUseCase {
    constructor(userGateway) {
        this.userGateway = userGateway;
    }
    async getUser() {
        return this.userGateway.getUser();
    }
    async devices() {
        return this.userGateway.devices();
    }
}
exports.UserUseCase = UserUseCase;
//# sourceMappingURL=user.usecase.js.map