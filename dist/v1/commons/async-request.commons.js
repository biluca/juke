"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postmanRequest = require("postman-request");
const Promise = require("bluebird");
class AsyncRequest {
    static request(options) {
        return new Promise((resolve, reject) => {
            postmanRequest(options, (error, response) => {
                if (error) {
                    return reject(error);
                }
                return resolve(response);
            });
        });
    }
    static spotifyRequest(options) {
        return new Promise((resolve, reject) => {
            postmanRequest(options, (error, response) => {
                if (response.body.error) {
                    return reject(response.body.error);
                }
                return resolve(response);
            });
        });
    }
}
exports.default = AsyncRequest;
//# sourceMappingURL=async-request.commons.js.map