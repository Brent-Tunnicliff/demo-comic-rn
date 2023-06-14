import { defaultPaddingProps, pressableMinHeight } from "../../helper/constants";
import LoadingSpinner from "../LoadingSpinner";
import View from "../View";

export default () => (
    <View
        { ...defaultPaddingProps }
        minHeight = { pressableMinHeight }
        alignContent = { 'center' }
    >
        <LoadingSpinner />
    </View>
);