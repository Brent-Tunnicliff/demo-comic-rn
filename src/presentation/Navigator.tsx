import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { ComicListScreen } from './screen';

type Screens = 'Home';
type StackParamList = {
    Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export type ScreenProps<ScreenType extends Screens> = NativeStackScreenProps<StackParamList, ScreenType>;

export const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name = 'Home'
                component = { ComicListScreen }
                options = {{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);