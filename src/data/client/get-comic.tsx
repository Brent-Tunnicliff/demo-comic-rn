import { isNil } from 'lodash';
import { Comic } from '../model';
import { getCachedComic, setComicCache } from './helper/cache';
import { fetchWithLogs } from './helper/fetch';
import { logger } from '../../logger';

const baseUrl = 'https://xkcd.com';
const getComicPath = 'info.0.json';

export const getLatestComic = async (): Promise<Comic> => {
    const latestCached = await getCachedComic('latest');
    if (!isNil(latestCached) && isComicToday(latestCached)) {
        logger.info('getting latest comic returning cache');
        return latestCached;
    }

    // The endpoint will return the lastest if you do not provide a comic number within the path.
    const url = `${baseUrl}/${getComicPath}`;
    return await performRequest(url)
        .catch((error) => {
            // If getting the latest fails, lets just default to the latest known comic.
            if (isNil(latestCached)) {
                throw error;
            } else {
                return latestCached;
            }
        });
};

export const getComic = async (props: { id: string }): Promise<Comic> => {
    const cachedComic = await getCachedComic(props.id);
    if (!isNil(cachedComic)) {
        logger.info(`returning cached comic ${props.id}`);
        return cachedComic;
    };

    const url = `${baseUrl}/${props.id}/${getComicPath}`;
    return await performRequest(url);
};

// API docs for getting comic = https://any-api.com/xkcd_com/xkcd_com/docs/API_Description
const performRequest = async (url: string): Promise<Comic> => {
    return await fetchWithLogs(url)
        .then((response) => {
            const comic = mapComic(response);
            setComicCache(comic);
            return comic;
        })
};

const mapComic = (response: any): Comic => {
    const day = response.day;
    const monthIndex = response.month - 1;
    const year = response.year;
    const date: Date = new Date(year, monthIndex, day);
    const number: number = response.num;

    return {
        alt: response.alt,
        date: date,
        id: number.toString(),
        image: response.img,
        number,
        title: response.title,
    };
};

const isComicToday = (comic: Comic): boolean => {
    const now = new Date();
    // Not perfect, but checking for today's local date is probably good enough.
    return comic.date.getFullYear() === now.getFullYear()
        && comic.date.getMonth() === now.getMonth()
        && comic.date.getDate() === now.getDate();
};
