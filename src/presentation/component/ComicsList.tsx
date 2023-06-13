import { FlatList } from "native-base";
import { IFlatListProps } from "native-base/lib/typescript/components/basic/FlatList";
import { Comic } from "../../data/model";
import ComicRow from "./ComicRow";
import { ListRenderItemInfo } from "react-native";

export type ComicsListProps = IFlatListProps<Comic>;

export default (props: ComicsListProps) => {
    const keyExtractor = (item: Comic, index: number): string => {
        // The number value is a unique identifier.
        return item.number.toString();
    };

    const onEndReached = () => {
        // TODO: Start getting the next set of comics.
    };

    const renderItem = (info: ListRenderItemInfo<Comic>) => {
        return <ComicRow data = { info.item } />;
    };

    return (
        <FlatList 
            { ...props }
            keyExtractor = { keyExtractor }
            onEndReached = { onEndReached }
            renderItem = { renderItem }
        />
    )
};