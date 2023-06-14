import { ISpinnerProps, Spinner } from "native-base";

export type LoadingSpinnerProps = ISpinnerProps;

export default (props: LoadingSpinnerProps) => (
    <Spinner { ...props } />
);