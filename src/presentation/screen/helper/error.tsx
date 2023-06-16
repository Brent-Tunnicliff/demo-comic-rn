import { Button, Text, VStack, View } from "../../component/common";

export type ErrorScreenProps = {
    message: string;
    onRetry: () => void;
};

export const ErrorScreen = (props: ErrorScreenProps) => (
    <View
        flex = { 1 }
        alignContent = { 'center' }
    >
        <VStack>
            <Text>{ props.message }</Text>
            <Button onPress = { () => props.onRetry() } >Retry</Button>
        </VStack>
    </View>
);