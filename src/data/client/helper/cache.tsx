import AsyncStorage from '@react-native-async-storage/async-storage';
import { Comic } from '../../model';
import { isNil, toNumber } from 'lodash';

// We are using this custom local storage cache logic to make sure any comic is only ever called the one time. The data should never change, so don't need to worry about 

export const getCachedComic = async (comicNumber: number | 'latest'): Promise<Comic | undefined> => {
    const key = comicNumber === 'latest' 
        ? (await getLatestNumber())?.toString()
        : comicNumber.toString();

    if (isNil(key)) {
        return undefined;
    };

    const comic = await AsyncStorage.getItem(key);
    if (isNil(comic)) {
        return undefined;
    }

    return JSON.parse(comic);
};

export const setComicCache = async (comic: Comic) => {
    const key = comic.number.toString();
    const value = JSON.stringify(comic);
    await AsyncStorage.setItem(key, value);

    // If it is later than our previous stored 'latest', then replace it there too.
    const latestComicNumber = await getLatestNumber();
    if (isNil(latestComicNumber) || latestComicNumber < comic.number) {
        await setLatestNumber(comic.number);
    }
};

const latestKey = 'LATEST_COMIC';
const getLatestNumber = async () => {
    const latest = await AsyncStorage.getItem(latestKey);
    if (isNil(latest)) {
        return undefined;
    }

    return toNumber(latest);
};

const setLatestNumber = async (value: number) => {
    await AsyncStorage.setItem(latestKey, value.toString());
};
