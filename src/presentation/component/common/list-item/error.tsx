import { defaultPaddingProps } from "../../helper/constants";
import { Pressable, PressableProps, Text, View } from "..";

export type ErrorListItemProps = PressableProps & {
    message: string
};

export const ErrorListItem = (props: ErrorListItemProps) => (
    <Pressable { ...props } >
        <View 
            { ...defaultPaddingProps }
            backgroundColor = { 'red.100' }
        >
            <Text>{ props.message }</Text>
        </View>
    </Pressable>
);