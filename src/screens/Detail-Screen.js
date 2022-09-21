import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ActivityIndicator, ScrollView, Dimensions } from "react-native"
import {backgroundColor, otherColor, textPrimary, textSecondary} from "../utils/Color-Pallete";
import { getAllCountries } from '../providers/Countries';
import { getSummaryByCountry } from '../providers/Summary';
import CardSummary from '../components/Home-Screen/Card-Summary';
import DropdownCountry from '../components/Detail-Screen/Dropdown-Country';
import Footer from '../components/Footer';

const DetailScreen = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [summary, setSummary] = useState({
        isLoading: false
    })

    const getCountries = async () => {
        const response = await getAllCountries();
        setCountries(response.countries.map((country) => country.name));
    }

    const getSummaryCountry = async (country) => {
        setSummary({
            ...summary,
            isLoading: true
        })
        const response = await getSummaryByCountry(country);
        setTimeout(() => {
            setSummary({
                ...summary,
                isLoading: false,
                confirmed: response.confirmed.value,
                recovered: response.recovered.value,
                deaths: response.deaths.value,
                lastUpdate: response.lastUpdate
            })
        }, 1000)
    }

    const handleChange = (country) => {
        setSelectedCountry(country);
        getSummaryCountry(country)
    }

    useEffect(() => {
        getCountries();
        console.log(Dimensions.get("window").height)
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={style.container}>
                    <Text style={style.title}>Detail Covid 19</Text>
                    <Text style={style.subTitle}>Select country to see details</Text>
                    {
                        countries.length > 0 ? 
                        <View style={{flex: 1, flexDirection: 'row', alignSelf: "center", marginBottom: 30}}>
                            <DropdownCountry countries={countries} handleChange={handleChange} />
                        </View>
                        :
                        <ActivityIndicator size="large" color={textSecondary}/>
                    }
                    {
                        selectedCountry === "" ?
                        <View></View>
                        :
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
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: backgroundColor,
    },
    title: {
        fontSize: 20,
        color: textPrimary,
        marginBottom: 10
    },
    subTitle: {
        fontSize: 15,
        color: textPrimary,
        marginBottom: 10
    },
    textUpdate: {
        marginTop: 10,
        alignSelf: "flex-end",
        fontSize: 12,
        color: "grey"
    }
})

export default DetailScreen;