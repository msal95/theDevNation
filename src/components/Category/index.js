import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

//Local Imports
import styles from "./styles";
import {FontAwesome} from "@expo/vector-icons";

export default function CategoryCourses(props) {
    const {iconName, title, color} = props
    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <View style={styles.iconContainer}>
                <FontAwesome name={iconName} size={24} color='black'/>
            </View>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={() => {
            }} style={styles.categoryButton}>
                <Text style={styles.buttonTitle}>Start Learning <FontAwesome name='chevron-right' size={10}
                                                                             color='red'/> </Text>
            </TouchableOpacity>
        </View>
    )
}
