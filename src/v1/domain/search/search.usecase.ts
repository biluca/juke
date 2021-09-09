import { Injectable } from '@nestjs/common';
import { HttpResponse } from 'src/v1/commons/model/http.model';
import { SearchGateway } from './search.gateway';
import errorsCollection from 'src/v1/commons/errors.collection'
import { GenericError } from 'src/v1/commons/model/generic-error.model';

@Injectable()
export class SearchUseCase {

    private searchGateway: SearchGateway;

    constructor(searchGateway: SearchGateway) {
        this.searchGateway = searchGateway;
    }

    async search(filter: string): Promise<HttpResponse> {

        try {
            this.validateFiler(filter);
            filter = this.formatFilter(filter);
            return this.searchGateway.search(filter);
        } catch (error) {
            throw error;
        }

    }

    formatFilter(filter: string): string {
        const splitedFilter = filter.split(" ");
        return splitedFilter.join('+');
    }

    validateFiler(filter: string) {
        if (filter === '' || filter === undefined) {
            throw new GenericError(500, errorsCollection.errors.search.INVALID_FILTER, "Validation Error");
        }
    }

}
