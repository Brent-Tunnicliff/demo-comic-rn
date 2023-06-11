import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ComicList } from './screen';

const Stack = createNativeStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name = 'Home'
                component = { ComicList }
            />
        </Stack.Navigator>
    </NavigationContainer>
);