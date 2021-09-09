export declare class GenericError {
    statusCode: number;
    title: string;
    message: string;
    constructor(statusCode: number, title: string, message: string);
    toLog(): {
        statusCode: number;
        title: string;
        message: string;
    };
}
