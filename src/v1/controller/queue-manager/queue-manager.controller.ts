import { Controller, Post, Req, Res, Body, Get, Query } from '@nestjs/common';
import { GenericController } from 'src/v1/commons/controller.commons';
import { Request, Response } from 'express'
import { HttpResponse } from "../../commons/model/http.model"
import { QueueManagerService } from 'src/v1/service/queue-manager/queue-manager.service';
import { QueueManagerCase } from 'src/v1/domain/queue-manager/queue-manager.usecase';

@Controller('queue-manager')
export class QueueManagerController extends GenericController {

    private readonly queueManagerCase = new QueueManagerCase(this.queueManagerService);

    constructor(private readonly queueManagerService: QueueManagerService) {
        super();
    }

    @Post('add')
    async play(@Req() req: Request, @Res() res: Response, @Body() body): Promise<HttpResponse> {
        const result = this.queueManagerCase.addItem(body);
        return this.resolveResponse(res, result);
    }

    @Get('get-queue')
    async getQueue(@Req() req: Request, @Res() res: Response, @Query('status') status): Promise<HttpResponse> {
        const access_token = this.getSpotifyAccessToken(req);
        this.queueManagerService.setAccessToken(access_token);

        const result = this.queueManagerCase.getQueue(status);
        return this.resolveResponse(res, result);
    }

    @Get('analyse')
    async analyseQueue(@Req() req: Request, @Res() res: Response): Promise<HttpResponse> {
        const access_token = this.getSpotifyAccessToken(req);
        this.queueManagerService.setAccessToken(access_token);

        const result = this.queueManagerCase.analyse();
        return this.resolveResponse(res, result);
    }

}
