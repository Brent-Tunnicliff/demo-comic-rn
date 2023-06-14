export type Comic = {
    alt: string;
    date: Date;
    image: string;
    number: number;
    title: string;

    // Setting `id` based on number as having the unique identifier be a string is expected by libraries being used.
    id: string;
};
