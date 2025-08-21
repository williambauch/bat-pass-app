import React from "react"
import { View, Text } from "react-native"
import { StatusBar } from "expo-status-bar"
import styles from "./style"
import { BatLogo } from "../../components/BatLogo/BatLogo"

import { BatButton } from "../../components/BatButton/BatButton"
export default function Home() {
    return (
        <View style={styles.appContainer}>
            <StatusBar style="light" />

            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            <View style={styles.inputContainer}>
                <BatButton />
            </View>

            <Text style={styles.text}>Home Screen</Text>

        </View>
    )
}

