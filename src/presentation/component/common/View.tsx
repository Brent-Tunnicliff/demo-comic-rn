import { Box, IBoxProps } from "native-base";

export type ViewProps = IBoxProps

export const View = (props: ViewProps) => (
    <Box { ...props } />
);

export const PaddedView = (props: ViewProps) => (
    <View 
        { ...props }
        paddingX = { 6 }
        paddingY = { 3 }
    />
);