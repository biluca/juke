"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationUseCase = void 0;
const spotify_config_1 = require("../../../config/spotify.config");
const errors_collection_1 = require("../../commons/errors.collection");
const generic_error_model_1 = require("../../commons/model/generic-error.model");
class AuthenticationUseCase {
    constructor(authenticationGateway) {
        this.authenticationGateway = authenticationGateway;
    }
    buildRedirectionUrl(state) {
        return this.authenticationGateway.buildSpotifyRedirectionURL(state);
    }
    async callback(code, state, request) {
        this.validateState(state, request);
        return await this.authenticationGateway.callback(code, request);
    }
    async refresh() {
        return await this.authenticationGateway.refresh();
    }
    validateState(state, request) {
        const stateKey = spotify_config_1.default.cookie_state_key;
        const storedState = request.cookies ? request.cookies[stateKey] : null;
        if (state === null || state !== storedState) {
            throw new generic_error_model_1.GenericError(500, errors_collection_1.default.errors.authentication.STATE_VALIDATION_MISMATCH, 'State Validation Error');
        }
    }
}
exports.AuthenticationUseCase = AuthenticationUseCase;
//# sourceMappingURL=authentication.usecase.js.map