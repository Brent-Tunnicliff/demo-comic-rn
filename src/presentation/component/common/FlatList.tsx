import { FlatList } from "native-base";
import { IFlatListProps } from "native-base/lib/typescript/components/basic/FlatList";

export type FlatListProps<Item> = IFlatListProps<Item> & {
    data: Item[];
}

export default <Item,> (props: FlatListProps<Item>) => (
    <FlatList { ...props } />
);