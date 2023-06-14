import { Box, IBoxProps } from "native-base";

export type ViewProps = IBoxProps

export default (props: ViewProps) => (
    <Box { ...props } />
);