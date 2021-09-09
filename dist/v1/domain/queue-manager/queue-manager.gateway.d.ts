import { QueueItem } from "./model/queue-item.model";
export interface QueueManagerGateway {
    addItem(queueItem: QueueItem): Promise<any>;
    getQueue(status: string): any;
    analyse(): any;
}
