export type Comic = {
    alt: string;
    // Keep having issues with Date ot being parsable by default, so keeing the date as primitives.
    date: ComicDate
    image: string;
    number: number;
    title: string;

    // Setting `id` based on number as having the unique identifier be a string is expected by libraries being used.
    id: string;
};

export type ComicDate = {
    day: number;
    month: number;
    year: number;
};

export const parseComicDate = (comic: Comic) => {
    const day = comic.date.day;
    const monthIndex = comic.date.month - 1;
    const year = comic.date.year;

    return new Date(year, monthIndex, day);
};
