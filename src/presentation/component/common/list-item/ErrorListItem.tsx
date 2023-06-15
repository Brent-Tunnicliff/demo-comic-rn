import { defaultPaddingProps } from "../../helper/constants";
import Pressable, { PressableProps } from "../Pressable";
import View from "../View";
import Text from "../Text";

export type ErrorListItemProps = PressableProps & {
    message: string
};

export default (props: ErrorListItemProps) => (
    <Pressable { ...props } >
        <View 
            { ...defaultPaddingProps }
            backgroundColor = { 'red.100' }
        >
            <Text>{ props.message }</Text>
        </View>
    </Pressable>
);