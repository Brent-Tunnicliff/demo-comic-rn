import { isNil } from "lodash";
import { defaultPaddingProps, pressableMinHeight } from "../../helper/constants";
import { LoadingSpinner, Text, VStack } from "..";

export type LoadingListItemProps = {
    message?: string
}

export const LoadingListItem = (props: LoadingListItemProps) => (
    <VStack
        { ...defaultPaddingProps }
        minHeight = { pressableMinHeight }
        alignContent = { 'center' }
    >
        <LoadingSpinner />
        { isNil(props.message) ? undefined : <Text>{ props.message }</Text> }
    </VStack>
);