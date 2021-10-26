import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigator from "./src/navigation/DrawerNavigator";

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <DrawerNavigator/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
