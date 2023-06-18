import { Heading as NBHeading, ITextProps, Text as NBText, IHeadingProps } from "native-base";

export type TextProps = ITextProps;

export const Text = (props: TextProps) => (
    <NBText { ...props } />
);

export type HeadingProps = IHeadingProps;

export const Heading = (props: HeadingProps) => (
    <NBHeading { ...props } />
);