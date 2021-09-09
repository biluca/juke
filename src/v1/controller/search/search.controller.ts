import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { GenericController } from 'src/v1/commons/controller.commons';
import { SpotifySearchService } from 'src/v1/service/spotify-search/spotify-search.service';
import { SearchUseCase } from 'src/v1/domain/search/search.usecase';
import { Request, Response } from 'express'

@Controller('search')
export class SearchController extends GenericController {

    private readonly searchUseCase = new SearchUseCase(this.spotifySearchService);

    constructor(private readonly spotifySearchService: SpotifySearchService) {
        super();
    }

    @Get()
    search(@Req() req: Request, @Res() res: Response, @Query('filter') filter) {

        const access_token = this.getSpotifyAccessToken(req);
        this.spotifySearchService.setAccessToken(access_token);

        const result = this.searchUseCase.search(filter);
        
        return this.resolveResponse(res, result);
    }

}
