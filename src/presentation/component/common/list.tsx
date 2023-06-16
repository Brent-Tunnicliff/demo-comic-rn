import { FlatList as NBFlatList } from "native-base";
import { IFlatListProps } from "native-base/lib/typescript/components/basic/FlatList";

export type FlatListProps<Item> = IFlatListProps<Item> & {
    data: Item[];
}

export const FlatList = <Item,> (props: FlatListProps<Item>) => (
    <NBFlatList { ...props } />
);