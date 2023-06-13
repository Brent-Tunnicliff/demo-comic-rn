import { IImageProps, Image } from "native-base";

export type ImageProps = IImageProps;

export default (props: ImageProps) => (
    <Image { ...props } />
);
