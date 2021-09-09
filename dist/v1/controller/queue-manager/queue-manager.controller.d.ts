import { GenericController } from 'src/v1/commons/controller.commons';
import { Request, Response } from 'express';
import { HttpResponse } from "../../commons/model/http.model";
import { QueueManagerService } from 'src/v1/service/queue-manager/queue-manager.service';
export declare class QueueManagerController extends GenericController {
    private readonly queueManagerService;
    private readonly queueManagerCase;
    constructor(queueManagerService: QueueManagerService);
    play(req: Request, res: Response, body: any): Promise<HttpResponse>;
    getQueue(req: Request, res: Response, status: any): Promise<HttpResponse>;
    analyseQueue(req: Request, res: Response): Promise<HttpResponse>;
}
