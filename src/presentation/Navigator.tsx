import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import ComicListScreen from './screen/ComicListScreen';

type Screens = 'Home';
type StackParamList = {
    Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export type ScreenProps<ScreenType extends Screens> = NativeStackScreenProps<StackParamList, ScreenType>;

export default () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name = 'Home'
                component = { ComicListScreen }
            />
        </Stack.Navigator>
    </NavigationContainer>
);