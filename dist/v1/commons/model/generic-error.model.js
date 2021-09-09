"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericError = void 0;
class GenericError {
    constructor(statusCode, title, message) {
        this.statusCode = statusCode;
        this.title = title;
        this.message = message;
    }
    toLog() {
        return {
            statusCode: this.statusCode,
            title: this.title,
            message: this.message
        };
    }
}
exports.GenericError = GenericError;
//# sourceMappingURL=generic-error.model.js.map