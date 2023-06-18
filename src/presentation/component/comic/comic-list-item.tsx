import { View } from "native-base";
import { Comic } from "../../../data/model";
import { HStack, Image, PaddedView, Pressable, Text, VStack } from "../common";

export type ComicListItemProps = {
    comic: Comic;
    onPress: () => void;
};

export const ComicListItem = (props: ComicListItemProps) => {
    const title = `${props.comic.number}: ${props.comic.title}`;
    const subTitle = props.comic.date.toLocaleDateString();
    const imageUri = props.comic.image;

    return (
        <Pressable>
            <PaddedView>
                <HStack alignItems = { 'center' } >
                    <Image
                        alt = { props.comic.alt }
                        source = {{ uri: imageUri, cache: 'force-cache' }}
                        style = {{ aspectRatio: 1 }}
                        width = { '33%' }
                    />

                    <VStack flex = { 1 } >
                        <Text isTruncated = { true } >{ title }</Text>
                        <Text isTruncated = { true } sub = { true } >{ subTitle }</Text>
                    </VStack>
                </HStack>
            </PaddedView>
        </Pressable>
    );
};
