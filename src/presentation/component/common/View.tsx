import { Box, IBoxProps } from "native-base";

export type ViewProps = IBoxProps

export const View = (props: ViewProps) => (
    <Box { ...props } />
);