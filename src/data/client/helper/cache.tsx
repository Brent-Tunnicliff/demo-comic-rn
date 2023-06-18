import AsyncStorage from '@react-native-async-storage/async-storage';
import { Comic } from '../../model';
import { isNil, toNumber } from 'lodash';
import { logger } from '../../../logger';

// We are using this custom local storage cache logic to make sure any comic is only ever called the one time. The data should never change, so don't need to worry about 

type GetCachedComicInput = string | 'latest';
export const getCachedComic = async (comicId: GetCachedComicInput): Promise<Comic | undefined> => {
    logger.info(`getting cache with key '${comicId}'`);
    let key = comicId === 'latest'
        ? await getLatestComicId()
        : comicId;

    if (isNil(key)) {
        logger.info(`cache key undefined`);
        return undefined;
    };

    const comicJson = await AsyncStorage.getItem(key);
    if (isNil(comicJson)) {
        logger.info(`comic ${key} is not cached`);
        return undefined;
    }

    const comic: Comic = JSON.parse(comicJson);
    logger.info(`returning cached comic ${key}`, { details: comic });
    return comic;
};

export const setComicCache = async (comic: Comic): Promise<void> => {
    const key = comic.id;
    const value = JSON.stringify(comic);
    logger.info(`setting cache "${key}"="${value}"`);
    await AsyncStorage.setItem(key, value);

    // If it is later than our previous stored 'latest', then replace it there too.
    const latestComic = await getLatestComicId()
        .then((comicId) => {
            if (isNil(comicId)) {
                return undefined;
            }

            return getCachedComic(comicId);
        });

    if (isNil(latestComic) || latestComic.number < comic.number) {
        await setLatestComicId(comic.id);
    }
};

const latestKey = 'LATEST_COMIC';
const getLatestComicId = async (): Promise<string | undefined> => {
    const latestComicId = await AsyncStorage.getItem(latestKey);
    if (isNil(latestComicId)) {
        logger.info('latest comic id not cached');
        return undefined;
    }

    logger.info(`cached latest comic id returning ${latestComicId}`);
    return latestComicId;
};

const setLatestComicId = async (comicId: string) => {
    logger.info(`setting cache "${latestKey}"="${comicId}"`);
    await AsyncStorage.setItem(latestKey, comicId);
};
