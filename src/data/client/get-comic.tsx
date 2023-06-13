import { isNil } from 'lodash';
import { Comic } from '../model';
import { getCachedComic, setComicCache } from './helper/cache';

const baseUrl = 'https://xkcd.com';
const getComicPath = 'info.0.json';

export const getLatestComic = async (): Promise<Comic> => {
    const latestCached = await getCachedComic('latest');
    if (!isNil(latestCached) && isComicToday(latestCached)) {
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

export const getComic = async (props: { number: number }): Promise<Comic> => {
    const cachedComic = await getCachedComic(props.number);
    if (!isNil(cachedComic)) {
        return cachedComic;
    };

    const url = `${baseUrl}/${props.number}/${getComicPath}`;
    return await performRequest(url);
};

// API docs for getting comic = https://any-api.com/xkcd_com/xkcd_com/docs/API_Description
const performRequest = async (url: string): Promise<Comic> => {
    return await fetch(url)
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

    return {
        alt: response.alt,
        date: date,
        image: response.img,
        number: response.num,
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
