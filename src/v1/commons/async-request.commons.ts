import * as postmanRequest from 'postman-request';
import * as Promise from 'bluebird';

abstract class AsyncRequest {
    static request(options: any): any {
        return new Promise((resolve, reject) => {
            postmanRequest(options, (error, response) => {
                if (error) {
                    return reject(error);
                }
                return resolve(response);
            });
        });
    }

    static spotifyRequest(options: any): any {
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

export default AsyncRequest;
