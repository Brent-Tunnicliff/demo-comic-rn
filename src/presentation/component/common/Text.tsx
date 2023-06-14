import { ITextProps, Text } from "native-base";

export type TextProps = ITextProps;

export default (props: TextProps) => (
    <Text { ...props } />
);