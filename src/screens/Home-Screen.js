import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, StatusBar, ScrollView } from "react-native"
import {backgroundColor, textPrimary} from "../utils/Color-Pallete"

import CardSummary from '../components/Home-Screen/Card-Summary';

const HomeScreen = () => {
    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <Text style={style.title}>Summary</Text>
                {/* untuk komponen confirmed, recovered, dan deaths ditambah di bawah ini */}
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: StatusBar.currentHeight,
        padding: 20,
        backgroundColor: backgroundColor
    },
    title: {
        fontSize: 20,
        color: textPrimary,
    }
})

export default HomeScreen;