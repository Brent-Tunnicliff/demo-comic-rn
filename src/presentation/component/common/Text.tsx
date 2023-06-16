import { ITextProps, Text as NBText } from "native-base";

export type TextProps = ITextProps;

export const Text = (props: TextProps) => (
    <NBText { ...props } />
);