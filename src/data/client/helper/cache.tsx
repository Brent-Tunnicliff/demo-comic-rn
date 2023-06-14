import AsyncStorage from '@react-native-async-storage/async-storage';
import { Comic } from '../../model';
import { isNil, toNumber } from 'lodash';

// We are using this custom local storage cache logic to make sure any comic is only ever called the one time. The data should never change, so don't need to worry about 

type GetCachedComicInput = string | 'latest';
export const getCachedComic = async (comicId: GetCachedComicInput): Promise<Comic | undefined> => {
    let key = comicId === 'latest'
        ? await getLatestComicId()
        : comicId;

    if (isNil(key)) {
        return undefined;
    };

    const comic = await AsyncStorage.getItem(key);
    if (isNil(comic)) {
        return undefined;
    }

    return JSON.parse(comic);
};

export const setComicCache = async (comic: Comic): Promise<void> => {
    const key = comic.number.toString();
    const value = JSON.stringify(comic);
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
        return undefined;
    }

    return latestComicId;
};

const setLatestComicId = async (comicId: string) => {
    await AsyncStorage.setItem(latestKey, comicId);
};
