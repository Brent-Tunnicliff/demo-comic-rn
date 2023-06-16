import { IPressableProps, Pressable as NBPressable } from "native-base";
import { pressableMinHeight } from "../helper/constants";

export type PressableProps = IPressableProps;

export const Pressable = (props: PressableProps) => (
    <NBPressable 
        { ...props }
        minHeight = { pressableMinHeight }
    />
);