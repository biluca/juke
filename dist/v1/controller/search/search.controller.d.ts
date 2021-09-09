import { GenericController } from 'src/v1/commons/controller.commons';
import { SpotifySearchService } from 'src/v1/service/spotify-search/spotify-search.service';
import { Request, Response } from 'express';
export declare class SearchController extends GenericController {
    private readonly spotifySearchService;
    private readonly searchUseCase;
    constructor(spotifySearchService: SpotifySearchService);
    search(req: Request, res: Response, filter: any): any;
}
