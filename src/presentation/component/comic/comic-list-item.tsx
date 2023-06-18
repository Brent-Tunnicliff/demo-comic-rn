import { Comic, parseComicDate } from "../../../data/model";
import { HStack, PaddedView, Pressable, Text, VStack } from "../common";
import { ComicImage } from "./comic-image";

export type ComicListItemProps = {
    comic: Comic;
    onPress: () => void;
};

export const ComicListItem = (props: ComicListItemProps) => {
    const title = `${props.comic.number}: ${props.comic.title}`;
    const subTitle = parseComicDate(props.comic).toLocaleDateString();

    return (
        <Pressable onPress = { props.onPress } >
            <PaddedView>
                <HStack alignItems = { 'center' } >
                    <ComicImage
                        comic = { props.comic }
                        style = {{ aspectRatio: 1 }}
                        width = { '33%' }
                    />

                    <VStack flex = { 1 } >
                        <Text isTruncated = { true } numberOfLines = { 1 } >{ title }</Text>
                        <Text isTruncated = { true } numberOfLines = { 1 } sub = { true } >{ subTitle }</Text>
                    </VStack>
                </HStack>
            </PaddedView>
        </Pressable>
    );
};
