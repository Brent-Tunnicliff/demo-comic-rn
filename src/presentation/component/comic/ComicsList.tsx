import { Comic } from "../../../data/model";
import ComicRow from "./ComicListItem";
import { ListRenderItemInfo } from "react-native";
import { useState } from "react";
import { isNil } from "lodash";
import FlatList, { FlatListProps } from "../common/FlatList";

type RowItem = {
    comicId: string;
    comic?: Comic;
    error?: Error;
    isLoading: boolean;
};

export type ComicsListProps = FlatListProps<RowItem> & {
    latestComic: Comic;
};

export default (props: ComicsListProps) => {
    const [rows, setRows] = useState<RowItem[]>([{
        comicId: props.latestComic.id,
        comic: props.latestComic,
        isLoading: false
    }]);

    const keyExtractor = (item: RowItem, index: number): string => {
        return item.comicId;
    };

    const onEndReached = () => {
        // TODO: Start getting the next set of comics.
    };

    const renderItem = (info: ListRenderItemInfo<RowItem>) => {
        return getRow(info.item, (comic) => {
            // TODO: hanndle navigation.
        });
    }

    return (
        <FlatList
            { ...props }
            data = { rows }
            keyExtractor = { keyExtractor }
            onEndReached = { onEndReached }
            renderItem = { renderItem }
        />
    )
};

const getRow = (rowItem: RowItem, onPress: (comic: Comic) => void) => {
    if (rowItem.isLoading) {
        return <LoadingListItem />
    };

    const comic = rowItem.comic;
    if (!isNil(comic)) {
        return <ComicRow comic = { comic } onPress = { () => onPress(comic) } />;
    };
};

// export default (props: ComicRowProps) => {
//     const [comic, setComic] = useState<Comic | undefined>(undefined);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<Error | undefined>(undefined);

//     const getComicModel = () => {
//         setIsLoading(true);

//         getComic({ id: props.comicId })
//             .then(setComic)
//             .catch(setError)
//             .finally(() => {
//                 setIsLoading(false);
//             });
//     };

//     useEffect(() => {
//         getComicModel();
//     }, []);

//     if (isLoading) {

//     };

//     if (!isNil(comic)) {
//         return <ComicView { ...props } comic = { comic } />;
//     };

    
// };