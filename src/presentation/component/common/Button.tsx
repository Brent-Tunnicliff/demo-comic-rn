import { Button as NBButton, IButtonProps } from "native-base";

export type ButtonProps = IButtonProps;

export const Button = (props: ButtonProps) => (
    <NBButton { ...props } />
);