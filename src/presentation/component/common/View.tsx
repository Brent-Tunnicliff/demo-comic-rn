import { isNil } from "lodash";
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

export type FullScreenViewProps = ViewProps & {
    isNavBarHidden?: boolean
}

export const FullScreenView = (props: FullScreenViewProps) => (
    <View 
        { ...props }
        flex = { 1 }
        safeAreaBottom
        safeAreaLeft
        safeAreaRight
        safeAreaTop = { props.isNavBarHidden }
    />
);