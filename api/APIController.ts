import { type APIRequestContext } from "@playwright/test";

export class APIController {
    readonly request: APIRequestContext;

    constructor (request: APIRequestContext) {
        this.request = request;
    }

    async initLogin(url: string, payload: object) {
        const response = await this.request.post(url, {data: payload});
        return response;
    }

    
}