import { Comic } from "../../../data/model";
import { Image, ImageProps } from "../common";

export type ComicImageProps = ImageProps & {
    comic: Comic
};

export const ComicImage = (props: ComicImageProps) => (
    <Image
        { ...props }
        alt = { props.comic.alt }
        source = {{ uri: props.comic.image, cache: 'force-cache' }}
    />
);