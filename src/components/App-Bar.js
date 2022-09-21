import * as React from "react";
import { Appbar } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
import {
	backgroundColor,
	textPrimary,
	textSecondary,
} from "../utils/Color-Pallete";

const AppBar = ({ navigation }) => (
	<View style={style.navigation}>
		<Appbar.Header
			elevated={true}
			style={{ backgroundColor: backgroundColor }}
		>
			<Appbar.Action
				icon='menu'
				onPress={() => {
					navigation.openDrawer();
				}}
			/>
			<Image
				source={require("../assets/icons/covid-tracker-logo.png")}
				style={style.image}
			/>
			<Appbar.Content title='Covid Tracker' />
		</Appbar.Header>
	</View>
);

const style = StyleSheet.create({
	navigation: {
		backgroundColor: textSecondary,
		width: "100%",
		margin: 0,
		padding: 0,
	},
	image: {
		width: 35,
		height: 35,
		marginRight: 10,
	},
	titleText: {
		color: textPrimary,
		fontSize: 16,
	},
	dataText: {
		color: textPrimary,
		fontSize: 24,
	},
});

export default AppBar;
