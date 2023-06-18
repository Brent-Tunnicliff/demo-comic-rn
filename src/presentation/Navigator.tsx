import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { ComicListScreen, ComicViewerScreen } from './screen';
import { Comic } from '../data/model';

type Screens = 'ComicViewer' | 'Home';
type StackParamList = {
    ComicViewer: { comic: Comic }
    Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export type ScreenProps<ScreenType extends Screens> = NativeStackScreenProps<StackParamList, ScreenType>;

export const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name = 'ComicViewer'
                component = { ComicViewerScreen }
                options={({ route }) => ({ title: route.params.comic.id })}
            />
            <Stack.Screen
                name = 'Home'
                component = { ComicListScreen }
                options = {{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);