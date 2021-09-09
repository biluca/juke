export class GenericError {
    statusCode: number;
    title: string;
    message: string;

    constructor(statusCode: number, title: string, message: string) {
        this.statusCode = statusCode;
        this.title = title;
        this.message = message;
    }

    toLog() {
        return {
            statusCode: this.statusCode,
            title: this.title,
            message: this.message

        }
    }
}

