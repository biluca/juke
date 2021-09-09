import { HttpResponse } from "./model/http.model";
import { Request, Response } from "express";
export declare abstract class GenericController {
    private readonly ACCESS_TOKEN_KEY;
    private readonly REFRESH_TOKEN_KEY;
    resolveResponse(res: Response, httpResponse: Promise<HttpResponse>): any;
    getSpotifyAccessToken(req: Request): string | string[];
    getSpotifyRefreshToken(req: Request): string | string[];
    generateNounceStateKey(): any;
}
