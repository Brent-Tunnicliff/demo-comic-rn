import { logger } from "../../../logger";
import { generateUuid } from "./uuid";

export const fetchWithLogs = async (url: string, init?: RequestInit): Promise<Response> => {
    const requestID = generateUuid();
    logger.info(`request ${requestID} started`, { details: { url, method: init?.method }});
    logger.debug(`request ${requestID}`, { details: { init }});

    return await fetch(url, init)
        .then((response) => {
            logger.info(`request ${requestID} response status ${response.status}`);
            logger.debug(`request ${requestID}`, { details: response });
            return response;
        })
        .catch((error) => {
            logger.info(`request ${requestID} error`, { details: error });
            throw error;
        })
        .finally(() => {
            logger.info(`request ${requestID} complete`, { details: { url, method: init?.method }});
        });
};
