import { UserGateway } from './user.gateway';
import { HttpResponse } from "../../commons/model/http.model";
export declare class UserUseCase {
    private userGateway;
    constructor(userGateway: UserGateway);
    getUser(): Promise<HttpResponse>;
    devices(): Promise<HttpResponse>;
}
