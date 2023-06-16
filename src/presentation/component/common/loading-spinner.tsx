import { ISpinnerProps, Spinner } from "native-base";

export type LoadingSpinnerProps = ISpinnerProps;

export const LoadingSpinner = (props: LoadingSpinnerProps) => (
    <Spinner { ...props } />
);