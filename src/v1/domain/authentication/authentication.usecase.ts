import { AuthenticationGateway } from './authentication.gateway'
import { HttpResponse } from "../../commons/model/http.model"
import spotify_config from "../../../config/spotify.config"
import errorsCollection from "../../commons/errors.collection"
import { GenericError } from 'src/v1/commons/model/generic-error.model';

export class AuthenticationUseCase {

    private authenticationGateway: AuthenticationGateway;

    constructor(authenticationGateway: AuthenticationGateway) {
        this.authenticationGateway = authenticationGateway;
    }

    buildRedirectionUrl(state: string): string {
        return this.authenticationGateway.buildSpotifyRedirectionURL(state);
    }

    async callback(code, state, request): Promise<HttpResponse> {
        this.validateState(state, request);
        return await this.authenticationGateway.callback(code, request);
    }

    async refresh(): Promise<HttpResponse> {
        return await this.authenticationGateway.refresh();
    }

    private validateState(state, request) {
        const stateKey = spotify_config.cookie_state_key;
        const storedState = request.cookies ? request.cookies[stateKey] : null;

        if (state === null || state !== storedState) {
            throw new GenericError(500, errorsCollection.errors.authentication.STATE_VALIDATION_MISMATCH, 'State Validation Error')
        }
    }

}
