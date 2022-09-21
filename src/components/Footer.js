import { View, StyleSheet, Text } from "react-native"
import IconAD from 'react-native-vector-icons/AntDesign';
import { backgroundColor, textPrimary } from "../utils/Color-Pallete";

const Footer = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}><IconAD name="copyright" size={15} color={textPrimary} style={{elevation: 10}}/> 2022 Copyright</Text>
            <Text style={style.text}>Made with <IconAD name="heart" size={15} color={textPrimary} style={{elevation: 10}}/> by Team 2 - Juara Coding</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: backgroundColor,
        // position: "absolute",
        // left: 0, right: 0, bottom: 0,
        alignItems: "center",
        elevation: 5
    },
    text: {
        color: textPrimary
    }
})

export default Footer;