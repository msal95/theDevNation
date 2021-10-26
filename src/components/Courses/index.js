import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

//Local Imports
import styles from "./styles";

export default function Courses(props) {
    const {image, title, color, onPress} = props
    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <Image
                source={{uri: image}}
                style={styles.image}/>

            <View style={styles.courseDetailContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.courseDuration}>
                    <Text style={{color: 'black'}}>12 Lessons </Text>
                    <Text style={{color: 'black'}}>5h 47min </Text>
                </View>
                <View style={styles.iconContainer}>
                    <FontAwesome name="play-circle-o" size={24} color="red"/>
                    <TouchableOpacity onPress={onPress} style={styles.startNowButton}
                    >
                        <Text style={{color: 'black'}}>Start Now </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
