import LoadingSpinner from "../../component/common/LoadingSpinner";
import View from "../../component/common/View";

export default () => (
    <View 
        flex = { 1 }
        alignContent = { 'center' }
    >
        <LoadingSpinner />
    </View>
);