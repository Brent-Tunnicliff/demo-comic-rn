import { Button, IButtonProps } from "native-base";

export type ButtonProps = IButtonProps;

export default (props: ButtonProps) => (
    <Button { ...props } />
);