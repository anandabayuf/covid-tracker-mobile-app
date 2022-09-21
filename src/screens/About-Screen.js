import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import {
	backgroundColor,
	textPrimary,
	textSecondary,
} from "../utils/Color-Pallete";
import CardPerson from "../components/About-Screen/Card-Person";
import Footer from "../components/Footer";
import { StatusBar } from "expo-status-bar";

const AboutScreen = () => {
	const teams = [
		{
			name: "Bayu",
			pic: require("../assets/images/bayu.jpg"),
			email: "anandabayu090@gmail.com",
			wa: "+62 812-2172-3798",
		},
		{
			name: "Rizka ",
			pic: require("../assets/images/rizka.jpg"),
			email: "Rizkaagustin02@gmail.com",
			wa: "+62 851-5654-8788",
		},
		{
			name: "Barkah",
			pic: require("../assets/images/barkah.jpg"),
			email: "Barkahsuhandii@gmail.com",
			wa: "+62 898-6680-125",
		},
		{
			name: "Ivan",
			pic: require("../assets/images/ivan.jpeg"),
			email: "ivanapriana128@gmail.com",
			wa: "62 813-1462-4973",
		},
		{
			name: "Faqih",
			pic: require("../assets/images/faqih.jpeg"),
			email: "ahmadfaqih796@gmail.com",
			wa: "+62 821-8277-1538",
		},
		{
			name: "Indra",
			pic: require("../assets/images/indra.jpg"),
			email: "indracjy@gmail.com",
			wa: "+62 877-8457-3407",
		},
		{
			name: "Yaqub",
			pic: require("../assets/images/yacob.jpg"),
			email: "yaqubhdn@gmail.com",
			wa: "+62 877-2983-9645",
		},
		{
			name: "Samuel",
			pic: require("../assets/images/samuel.jpg"),
			email: "samuelsdavilantinovn@gmail.com",
			wa: "+62 896-5705-5232",
		},
	];
	return (
		<SafeAreaView>
			<StatusBar />
			<ScrollView>
				<View style={style.container}>
					<Text style={style.title}>About</Text>
					<Text style={style.subTitle}>Team 2 - Juara Coding</Text>
					{teams.map((person, index) => {
						return (
							<CardPerson
								key={index}
								name={person.name}
								wa={person.wa}
								email={person.email}
								pic={person.pic}
							/>
						);
					})}
				</View>
				<Footer />
			</ScrollView>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: backgroundColor,
	},
	title: {
		fontSize: 20,
		color: textPrimary,
		marginBottom: 10,
	},
	subTitle: {
		fontSize: 15,
		color: textSecondary,
		alignSelf: "center",
		marginBottom: 10,
	},
});

export default AboutScreen;
