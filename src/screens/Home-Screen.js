import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ActivityIndicator, ScrollView } from "react-native"
import { backgroundColor, textPrimary, textSecondary } from "../utils/Color-Pallete";
import { getAllSummary, getSummaryByCountry } from "../providers/Summary"
import CardSummary from '../components/Home-Screen/Card-Summary';
import Flag from 'react-native-flags';

const HomeScreen = () => {
    const [summary, setSummary] = useState({
        isLoading: false
    });
    const [summaryId, setSummaryId] = useState({
        isLoading: false
    });

    const getSummary = async () => {
        setSummary({
            ...summary,
            isLoading: true
        })
        const response = await getAllSummary();
        setTimeout(() => {
            setSummary({
                ...summary,
                isLoading: false,
                confirmed: response.confirmed.value,
                recovered: response.recovered.value,
                deaths: response.deaths.value,
                lastUpdate: response.lastUpdate,
            });
        }, 1000)
    };

    const getSummaryIndonesia = async () => {
        setSummaryId({
            ...summaryId,
            isLoading: true
        })
        const response = await getSummaryByCountry("id");
        setTimeout(() => {
            setSummaryId({
                ...summaryId,
                isLoading: false,
                confirmed: response.confirmed.value,
                recovered: response.recovered.value,
                deaths: response.deaths.value,
                lastUpdate: response.lastUpdate,
            });
        }, 1000)
    };

    useEffect(() => {
        getSummary();
        getSummaryIndonesia();
    }, []);

    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <View style={style.section}>
                    <Text style={style.title}>Summary</Text>
                    {
                        summary.isLoading ?
                        <ActivityIndicator size="large" color={textSecondary}/>
                        :
                        <View>
                            <CardSummary
                                title="Total Confirmed"
                                data={summary.confirmed}
                            />
                            <CardSummary
                                title="Total Recovered"
                                data={summary.recovered}
                            />
                            <CardSummary
                                title="Total Deaths"
                                data={summary.deaths}
                            />
                            <Text style={style.textUpdate}>Last update: {(new Date(summary.lastUpdate)).toLocaleString('id')}</Text>
                        </View>
                    }
                </View>
                <Text style={style.title}>
                    Summary: {" "}
                    <Flag
                        code="ID"
                        size={32}
                    />
                    {" "}Indonesia
                </Text>
                
                {
                    summaryId.isLoading ?
                    <ActivityIndicator size="large" color={textSecondary}/>
                    :
                    <View>
                        <CardSummary
                            title="Total Confirmed"
                            data={summaryId.confirmed}
                        />
                        <CardSummary
                            title="Total Recovered"
                            data={summaryId.recovered}
                        />
                        <CardSummary
                            title="Total Deaths"
                            data={summaryId.deaths}
                        />
                        <Text style={style.textUpdate}>Last update: {(new Date(summaryId.lastUpdate)).toLocaleString('id')}</Text>
                    </View>
                }
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