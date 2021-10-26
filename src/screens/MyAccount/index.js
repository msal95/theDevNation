import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

//Local Imports
import styles from "./styles";

export default function MyAccount() {
    return (
        <View style={styles.container}>
            <Text>My Account</Text>
            <TouchableOpacity>
                <Text>Go to Video Player</Text>
            </TouchableOpacity>
        </View>
    )
}
