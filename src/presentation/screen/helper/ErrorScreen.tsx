import Button from "../../component/common/Button";
import Text from "../../component/common/Text";
import VStack from "../../component/common/VStack";
import View from "../../component/common/View";

export type ErrorScreenProps = {
    message: string;
    onRetry: () => void;
};

export default (props: ErrorScreenProps) => (
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