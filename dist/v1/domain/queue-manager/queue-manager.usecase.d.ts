import { HttpResponse } from 'src/v1/commons/model/http.model';
import { QueueManagerGateway } from './queue-manager.gateway';
export declare class QueueManagerCase {
    private queueManagerGateway;
    constructor(queueManagerGateway: QueueManagerGateway);
    addItem(queueItem: any): Promise<HttpResponse>;
    getQueue(status: string): Promise<HttpResponse>;
    analyse(): Promise<HttpResponse>;
}
