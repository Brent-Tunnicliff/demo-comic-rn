import { HStack } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

const defaultSpace = 4

export type HStackProps = IHStackProps;

export default (props: HStackProps) => (
    <HStack 
        { ...props } 
        space = { props.space || defaultSpace } 
    />
);