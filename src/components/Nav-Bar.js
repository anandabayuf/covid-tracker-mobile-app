import { View, Text, StyleSheet } from "react-native"
import { IconButton, MD3Colors } from 'react-native-paper';
import { backgroundColor } from "../utils/Color-Pallete";

const NavBar = () => {
    return (
        <View style={{flexDirection:"row", backgroundColor: backgroundColor, width: "100%", margin: 0}}>
            <IconButton
                icon="camera"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => console.log('Pressed')}
            />
            <Text>Covid Tracker</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {

    }
})

export default NavBar;