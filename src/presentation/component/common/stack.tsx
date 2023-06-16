import { HStack as NBHStack } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";
import { VStack as NBVStack } from "native-base";
import { IVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";

const defaultSpaceHStack = 4
export type HStackProps = IHStackProps;

export const HStack = (props: HStackProps) => (
    <NBHStack 
        { ...props } 
        space = { props.space || defaultSpaceHStack } 
    />
);

const defaultSpaceVStack = 2
export type VStackProps = IVStackProps;

export const VStack = (props: VStackProps) => (
    <NBVStack
        { ...props } 
        space = { props.space || defaultSpaceVStack } 
    />
);