import React from "react";
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

//Local Imports
import styles from "./styles";

export default function Title(props) {
    const {title, right = false} = props
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                {Boolean(right) && (
                    <TouchableOpacity onPress={() => {
                    }}>
                        <Text style={styles.buttonTitle}>View All Free Courses <FontAwesome name='arrow-right' size={10}
                                                                                            color='red'/></Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    )
}
