import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, StatusBar, ScrollView } from "react-native"
import { backgroundColor, textPrimary } from "../utils/Color-Pallete"
import confirmed from "../assets/icons/confirmed.png";
import deaths from "../assets/icons/deaths.png";
import recovered from "../assets/icons/recovered.png";
import { useEffect, useState } from "react"
import { getAllSummary, getSummaryByCountry } from "../providers/Summary"
import CardSummary from '../components/Home-Screen/Card-Summary';

//import provider

const HomeScreen = () => {
    //use state
    const [summary, setSummary] = useState({});
    const [summaryId, setSummaryId] = useState({});
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");
    const [summaryCountry, setSummaryCountry] = useState(null);

    //buat function untuk implementasi provider
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

    const getSummaryCountry = async (country) => {
        const response = await getSummaryByCountry(country);
        console.log(response)
        setSummaryCountry({
            ...summaryCountry,
            confirmed: response.confirmed.value,
            recovered: response.recovered.value,
            deaths: response.deaths.value,
            lastUpdate: response.lastUpdate,
        });
    };

    const getCountries = async () => {
        const response = await getAllCountries();
        alert(response.countries.length);
        setCountries(response.countries);
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
        getCountries();
    }, []);

    const handleChange = (e) => {
        setCountry(e.target.value);
        console.log(e.target.value);
        getSummaryCountry(e.target.value);
    };



    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <Text style={style.title}>Summary</Text>
                {/* untuk komponen confirmed, recovered, dan deaths ditambah di bawah ini */}
                <CardSummary
                    image={confirmed}
                    title="Total Confirmed"
                    data={JSON.stringify(summary.confirmed)}
                />
                <CardSummary
                    image={recovered}
                    title="Total Recovered"
                    data={JSON.stringify(summary.recovered)}
                />
                <CardSummary
                    image={deaths}
                    title="Total Deaths"
                    data={JSON.stringify(summary.deaths)}
                />
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