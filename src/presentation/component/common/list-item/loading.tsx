import { isNil } from "lodash";
import { pressableMinHeight } from "../../helper/constants";
import { LoadingSpinner, PaddedView, Text, VStack } from "..";

export type LoadingListItemProps = {
    message?: string
}

export const LoadingListItem = (props: LoadingListItemProps) => (
    <PaddedView>
        <VStack
            minHeight = { pressableMinHeight }
            alignContent = { 'center' }
        >
            <LoadingSpinner />
            { isNil(props.message) ? undefined : <Text textAlign = { 'center' }>{ props.message }</Text> }
        </VStack>
    </PaddedView>
);