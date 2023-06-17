import { Button, PaddedView, Text, VStack, View } from "../../component/common";

export type ErrorScreenProps = {
    message: string;
    onRetry: () => void;
};

export const ErrorScreen = (props: ErrorScreenProps) => (
    <PaddedView
        flex = { 1 }
        alignContent = { 'center' }
    >
        <VStack>
            <Text>{ props.message }</Text>
            <Button onPress = { () => props.onRetry() } >Retry</Button>
        </VStack>
    </PaddedView>
);