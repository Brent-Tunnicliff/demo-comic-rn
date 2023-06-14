import { Comic } from "../../../data/model";
import { defaultPaddingProps } from "../helper/constants";
import HStack from "../common/HStack";
import VStack from "../common/VStack";
import Pressable from "../common/Pressable";
import Text from "../common/Text";
import Image from "../common/Image";
import { ListItemProps } from "../common/list-item/ListItem";

export type ComicListItemProps = ListItemProps & {
    comic: Comic;
    onPress: () => void;
};

export default (props: ComicListItemProps) => (
    <Pressable onPress = { () => props.onPress() }>
        <HStack { ...defaultPaddingProps } >
            <Image
                alt = { props.comic.alt } 
                source = {{ uri: props.comic.image, cache: 'force-cache' }} 
            />

            <VStack flex = { 1 }>
                <Text>{ 
                    `${props.comic.number}: ${props.comic.title}` 
                }</Text>

                <Text sub = { true } >{ 
                    props.comic.date.toLocaleDateString()
                }</Text>
            </VStack>
        </HStack>
    </Pressable>
);
