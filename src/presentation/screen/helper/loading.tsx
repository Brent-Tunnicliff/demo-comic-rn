import { LoadingSpinner, PaddedView, View } from "../../component/common";

export const LoadingScreen = () => (
    <PaddedView
        flex = { 1 }
        alignContent = { 'center' }
    >
        <LoadingSpinner />
    </PaddedView>
);