import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, StatusBar, ScrollView } from "react-native"
import { backgroundColor, textPrimary } from "../utils/Color-Pallete";
import { getAllSummary, getSummaryByCountry } from "../providers/Summary"
import CardSummary from '../components/Home-Screen/Card-Summary';

const HomeScreen = () => {
    const [summary, setSummary] = useState({});
    const [summaryId, setSummaryId] = useState({});

    const getSummary = async () => {
        const response = await getAllSummary();
        setSummary({
            ...summary,
            confirmed: response.confirmed.value,
            recovered: response.recovered.value,
            deaths: response.deaths.value,
            lastUpdate: response.lastUpdate,
        });
    };

    const getSummaryIndonesia = async () => {
        const response = await getSummaryByCountry("id");
        setSummaryId({
            ...summaryId,
            confirmed: response.confirmed.value,
            recovered: response.recovered.value,
            deaths: response.deaths.value,
            lastUpdate: response.lastUpdate,
        });
    };

    useEffect(() => {
        getSummary();
        getSummaryIndonesia();
        // getCountries();
    }, []);

    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <View style={style.section}>
                    <Text style={style.title}>Summary</Text>
                    <CardSummary
                        title="Total Confirmed"
                        data={JSON.stringify(summary.confirmed)}
                    />
                    <CardSummary
                        title="Total Recovered"
                        data={JSON.stringify(summary.recovered)}
                    />
                    <CardSummary
                        title="Total Deaths"
                        data={JSON.stringify(summary.deaths)}
                    />
                    <Text style={style.textUpdate}>Last update: {(new Date(summary.lastUpdate)).toLocaleString('id')}</Text>
                </View>
                <Text style={style.title}>Summary: Indonesia</Text>
                <CardSummary
                    title="Total Confirmed"
                    data={JSON.stringify(summaryId.confirmed)}
                />
                <CardSummary
                    title="Total Recovered"
                    data={JSON.stringify(summaryId.recovered)}
                />
                <CardSummary
                    title="Total Deaths"
                    data={JSON.stringify(summaryId.deaths)}
                />
                <Text style={style.textUpdate}>Last update: {(new Date(summaryId.lastUpdate)).toLocaleString('id')}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 30,
        backgroundColor: backgroundColor
    },
    title: {
        fontSize: 20,
        color: textPrimary,
        marginBottom: 5
    },
    section: {
        marginBottom: 30
    },
    textUpdate: {
        alignSelf: "flex-end",
        fontSize: 12,
        color: "grey"
    }
})

export default HomeScreen;