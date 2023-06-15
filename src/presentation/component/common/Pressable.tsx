import { IPressableProps, Pressable } from "native-base";
import { pressableMinHeight } from "../helper/constants";

export type PressableProps = IPressableProps;

export default (props: PressableProps) => (
    <Pressable 
        { ...props }
        minHeight = { pressableMinHeight }
    />
);