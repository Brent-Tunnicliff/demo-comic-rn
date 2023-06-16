import { IImageProps, Image as NBImage } from "native-base";

export type ImageProps = IImageProps;

export const Image = (props: ImageProps) => (
    <NBImage { ...props } />
);
