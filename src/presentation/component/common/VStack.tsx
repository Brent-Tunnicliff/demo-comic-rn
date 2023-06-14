import { VStack } from "native-base";
import { IVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";

const defaultSpace = 2

export type VStackProps = IVStackProps;

export default (props: VStackProps) => (
    <VStack
        { ...props } 
        space = { props.space || defaultSpace } 
    />
);