import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, StatusBar, ScrollView } from "react-native"
import {backgroundColor, textPrimary} from "../utils/Color-Pallete"

const AboutScreen = () => {
    const teams = [
        {
            pic: '../../assets/images/bayu.png',
            name: 'Bayu',
            
        }
    ]
    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <Text style={style.title}>About</Text>
                <Text style={style.title}>About</Text>
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

export default AboutScreen;