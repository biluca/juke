import { Injectable } from '@nestjs/common';
import { HttpResponse } from 'src/v1/commons/model/http.model';
import { QueueManagerGateway } from './queue-manager.gateway';

@Injectable()
export class QueueManagerCase {

    private queueManagerGateway: QueueManagerGateway;

    constructor(queueManagerGateway: QueueManagerGateway) {
        this.queueManagerGateway = queueManagerGateway;
    }

    async addItem(queueItem): Promise<HttpResponse> {
        return this.queueManagerGateway.addItem(queueItem)
    }

    async getQueue(status: string): Promise<HttpResponse> {
        return this.queueManagerGateway.getQueue(status);
    }

    async analyse(): Promise<HttpResponse> {
        return this.queueManagerGateway.analyse();
    }

}
