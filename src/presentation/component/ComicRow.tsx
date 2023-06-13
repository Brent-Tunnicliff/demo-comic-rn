import { IListItemProps } from "native-base";
import { Comic } from "../../data/model";
import { defaultPaddingProps } from "./helper/constants";
import Image from "./Image";
import HStack from "./HStack";
import VStack from "./VStack";
import Pressable from "./Pressable";
import Text from "./Text";

export type ComicRowProps = IListItemProps & {
    data: Comic
};

export default (props: ComicRowProps) => (
    <Pressable>
        <HStack { ...defaultPaddingProps } >
            <Image 
                alt = { props.data.alt } 
                source = {{ uri: props.data.image, cache: 'force-cache' }} 
            />

            <VStack flex = { 1 }>
                <Text>{ 
                    `${props.data.number}: ${props.data.title}` 
                }</Text>

                <Text sub = { true } >{ 
                    props.data.date.toLocaleDateString()
                }</Text>
            </VStack>
        </HStack>
    </Pressable>
);
