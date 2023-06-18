import { Comic } from "../../../data/model";
import { ListRenderItemInfo } from "react-native";
import { useState } from "react";
import { isNil, last, toNumber } from "lodash";
import { getComic } from "../../../data/client";
import { ErrorListItem, FlatList, LoadingListItem, View } from "../common";
import { ComicListItem } from "./comic-list-item";

type RowItem = {
    comicId: string;
    comic?: Comic;
    error?: Error;
    isLoading: boolean;
};

export type ComicsListProps = {
    latestComic: Comic;
};

export const ComicsList = (props: ComicsListProps) => {
    const [rows, setRows] = useState<RowItem[]>([{
        comicId: props.latestComic.id,
        comic: props.latestComic,
        isLoading: false
    }]);

    const lastRow = last(rows)!
    const isLastRowLoading = lastRow.isLoading

    const keyExtractor = (item: RowItem): string => {
        return item.comicId;
    };

    const onEndReached = () => {
        if (isLastRowLoading) {
            return;
        }

        const lastRowNumber = toNumber(lastRow.comicId);
        const nextNumber = lastRowNumber - 1;
        if (nextNumber < 1) {
            return;
        }

        const comicId = nextNumber.toString()
        const existingRows = [...rows];
        const updateComic = (options: { comic?: Comic, error?: Error, isLoading: boolean }) => {
            setRows([...existingRows, {
                ...options,
                comicId
            }]);
        };

        updateComic({ isLoading: true });

        getComic({ id: comicId })
            .then((comic) => updateComic({ comic, isLoading: false }))
            .catch((error) => updateComic({ error, isLoading: false }));
    };

    const renderItem = (info: ListRenderItemInfo<RowItem>) => {
        return getRow(info.item, (comic) => {
            // TODO: hanndle navigation.
        });
    }

    const listFooterComponent = () => {
        return <View height = { 16 } />
    };

    return (
        <FlatList
            data = { rows }
            ListFooterComponent = { listFooterComponent }
            keyExtractor = { keyExtractor }
            onEndReached = { onEndReached }
            renderItem = { renderItem }
        />
    )
};

const getRow = (rowItem: RowItem, onPress: (comic: Comic) => void) => {
    if (rowItem.isLoading) {
        return <LoadingListItem message = { `Loading comic ${ rowItem.comicId }...` } />;
    };

    const comic = rowItem.comic;
    if (!isNil(comic)) {
        return <ComicListItem comic = { comic } onPress = { () => onPress(comic) } />;
    };

    const errorMessage = 'Failed to load comic with error: ' + (isNil(rowItem.error) ? 'unknown' : rowItem.error?.message);
    return <ErrorListItem message = { errorMessage } />;
};
