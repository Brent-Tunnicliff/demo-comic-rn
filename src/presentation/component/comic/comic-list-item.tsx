import { Comic } from "../../../data/model";
import { HStack, Image, Pressable, Text, VStack } from "../common";
import { defaultPaddingProps } from "../helper/constants";

export type ComicListItemProps = {
    comic: Comic;
    onPress: () => void;
};

export const ComicListItem = (props: ComicListItemProps) => (
    <Pressable>
        <HStack { ...defaultPaddingProps } >
            <Image
                alt = { props.comic.alt } 
                source = {{ uri: props.comic.image, cache: 'force-cache' }} 
            />

            <VStack flex = { 1 } >
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
