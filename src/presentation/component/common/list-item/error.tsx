import { PaddedView, Pressable, PressableProps, Text } from "..";

export type ErrorListItemProps = PressableProps & {
    message: string
};

export const ErrorListItem = (props: ErrorListItemProps) => (
    <Pressable { ...props } >
        <PaddedView 
            backgroundColor = { 'red.100' }
        >
            <Text>{ props.message }</Text>
        </PaddedView>
    </Pressable>
);