// This logger is a placeholder.
// Ideally it would connect to a cloud based system, but I am not doing that at this time for the demo project.

import { isNil } from "lodash";

type LoggerOptions = {
    details?: Object
    error?: Error
}

export namespace logger {
    export const debug = (message: string, options?: LoggerOptions) => {
        if (!__DEV__) {
            return;
        }

        console.debug(mapLogMessage(message, options));
    };

    export const info = (message: string, options?: LoggerOptions) => {
        console.info(mapLogMessage(message, options));
    };

    export const warning = (message: string, options?: LoggerOptions) => {
        console.warn(mapLogMessage(message, options));
    };

    export const error = (message: string, options?: LoggerOptions) => {
        console.error(mapLogMessage(message, options));
    };
}

const mapLogMessage = (message: string, options?: LoggerOptions): string => {
    var logMessage = `message='${message}'`;
    if (isNil(options)) {
        return logMessage;
    };

    if (!isNil(options.error)) {
        logMessage += `, error=${ JSON.stringify(options.error) }`;
    };

    if (!isNil(options.details)) {
        logMessage += `, details=${ JSON.stringify(options.details) }`;
    };

    return logMessage;
}