import { LoadingSpinner, View } from "../../component/common";


export const LoadingScreen = () => (
    <View
        flex = { 1 }
        alignContent = { 'center' }
    >
        <LoadingSpinner />
    </View>
);