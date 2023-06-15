import { isNil } from "lodash";
import { defaultPaddingProps, pressableMinHeight } from "../../helper/constants";
import LoadingSpinner from "../LoadingSpinner";
import Text from "../Text";
import VStack from "../VStack";

export type LoadingListItemProps = {
    message?: string
}

export default (props: LoadingListItemProps) => (
    <VStack
        { ...defaultPaddingProps }
        minHeight = { pressableMinHeight }
        alignContent = { 'center' }
    >
        <LoadingSpinner />
        { isNil(props.message) ? undefined : <Text>{ props.message }</Text> }
    </VStack>
);