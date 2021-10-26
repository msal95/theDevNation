import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
//Local Imports
import HomeScreen from "../screens/HomeScreen";
import VideoPlayerScreen from "../screens/VideoPlayerScreen";


const Stack = createNativeStackNavigator()

const ScreenOptions = {
    headerStyle: {
        backgroundColor: 'white',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
};


export default function RootNavigation () {
    return (
        <Stack.Navigator screenOptions={ScreenOptions} >
            <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
            <Stack.Screen name='VideoPlayer' options={{headerShown: false}}  component={VideoPlayerScreen} />
        </Stack.Navigator>
    )
}
