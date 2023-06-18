import { logger } from "../../../logger";
import { generateUuid } from "./uuid";

export const fetchWithLogs = async (url: string, init?: RequestInit): Promise<Object> => {
    const requestID = generateUuid();
    logger.info(`request ${requestID} started`, { details: { url, method: init?.method }});
    logger.debug(`request ${requestID}`, { details: { init }});

    return await fetch(url, init)
        .then(async (response) => {
            logger.info(`request ${requestID} response status ${response.status}`);
            if (!response.ok) {
                throw Error(`Request failed with status ${response.status} ${response.statusText}`);
            }

            const body = await response.json();
            logger.debug(`request ${requestID}`, { details: body });
            return body;
        })
        .catch((error) => {
            logger.info(`request ${requestID} error`, { details: error });
            throw error;
        })
        .finally(() => {
            logger.info(`request ${requestID} complete`, { details: { url, method: init?.method }});
        });
};
