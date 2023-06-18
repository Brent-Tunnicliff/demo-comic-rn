import { VStack } from "native-base";
import { FullScreenView, Heading, PaddedView, Text, View } from "../component/common";
import { ScreenProps } from "../navigator";
import { ComicImage } from "../component/comic";

export const ComicViewerScreen = ({ navigation, route }: ScreenProps<'ComicViewer'>) => {
    const comic = route.params.comic;

    return (
        <FullScreenView>
            <PaddedView flex = { 1 }>
                <VStack
                    alignItems = { 'center' }
                    flex = { 1 }
                    space = { 3 }
                >
                    <Heading textAlign = { 'center' } numberOfLines = { 0 } >{ comic.title }</Heading>

                    <View
                        backgroundColor = { 'white' }
                        borderWidth = { 1 }
                        flex = { 1 }
                        padding = { 2 }
                        width = { '100%' }
                    >

                        <ComicImage
                            comic = { comic }
                            flex = { 1 }
                            resizeMode = { 'contain' }
                        />
                    </View>
                </VStack>
            </PaddedView>
        </FullScreenView>
    );
};
