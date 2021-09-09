import { UserGateway } from './user.gateway'
import { HttpResponse } from "../../commons/model/http.model"

export class UserUseCase {

    private userGateway: UserGateway;

    constructor(userGateway: UserGateway) {
        this.userGateway = userGateway;
    }

    async getUser(): Promise<HttpResponse>{
        return this.userGateway.getUser();
    }

    async devices(): Promise<HttpResponse> {
        return this.userGateway.devices();
    }


}
