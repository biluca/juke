import { AuthenticationGateway } from './authentication.gateway';
import { HttpResponse } from "../../commons/model/http.model";
export declare class AuthenticationUseCase {
    private authenticationGateway;
    constructor(authenticationGateway: AuthenticationGateway);
    buildRedirectionUrl(state: string): string;
    callback(code: any, state: any, request: any): Promise<HttpResponse>;
    refresh(): Promise<HttpResponse>;
    private validateState;
}
