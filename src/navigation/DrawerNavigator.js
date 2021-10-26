import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';

import MyCourses from "../screens/MyCourses";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator()

export default function DrawerNavigator () {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="My Courses" component={MyCourses} />
        </Drawer.Navigator>
    )
}
