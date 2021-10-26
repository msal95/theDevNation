import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

//Local Imports
import styles from "./styles";

export default function MyCourses() {
    return (
        <View style={styles.container}>
            <Text>My Courses</Text>
            <TouchableOpacity>
                <Text>Go to Video Player</Text>
            </TouchableOpacity>
        </View>
    )
}
