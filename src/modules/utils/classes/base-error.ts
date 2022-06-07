import * as ResponseHTTP from "../types";

export class BaseError extends Error {
    public readonly log: string;
    public readonly methodName!: string;
    public readonly httpCode: any;
    public readonly isOperational: boolean;

    constructor(
        log: string,
        message: string | unknown = log,
        methodName?: string,
        httpCode = ResponseHTTP.HTTP_STATUS.INTERNAL_SERVER_ERROR,
        isOperational = true
    ) {
        super(<string>message);
        Object.setPrototypeOf(this, new.target.prototype);

        this.log = log;
        if (methodName) this.methodName = methodName;
        this.httpCode = httpCode;
        this.isOperational = isOperational;

        Error.captureStackTrace(this);
    }
}