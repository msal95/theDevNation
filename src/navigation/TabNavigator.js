import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons";

//Local Import
import MyCourses from "../screens/MyCourses";
import RootNavigation from "./RootNavigation";
import MyAccount from "../screens/MyAccount";


const Tab = createBottomTabNavigator()

export default function TabNavigator() {

    const renderTabIcon = ({focused, color, size, route}) => {
        let iconName;
        if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
        } else if (route.name === 'My Account') {
            iconName = focused ? 'user' : 'user';
        } else if (route.name === 'My Courses') {
            iconName = focused ? 'book' : 'book';
        }
        return <FontAwesome name={iconName} size={size} color={color} />;
    };


    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({route}) => ({
                tabBarIcon: props => renderTabIcon({...props, route}),
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: 'black',
            })}
        >
            <Tab.Screen name="Home"  options={{headerShown: false}}  component={RootNavigation} />
            <Tab.Screen name="My Courses"  options={{headerShown: false}} component={MyCourses} />

            <Tab.Screen name="My Account"  options={{headerShown: false}} component={MyAccount} />
        </Tab.Navigator>
    )
}
