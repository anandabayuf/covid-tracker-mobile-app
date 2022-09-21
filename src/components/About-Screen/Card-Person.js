import React from 'react';
import { View, StyleSheet, Image } from "react-native"
import { Card, Title, Paragraph } from 'react-native-paper';
import { otherColor, textPrimary } from '../../utils/Color-Pallete';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
const CardPerson = (props) => {
    const cardStyle = {
        borderRadius: 20, 
        backgroundColor: otherColor,
    }

    return (
        <View style={style.card}>
            <Card mode='elevated' elevation={3} style={cardStyle}>
                <Card.Content style={{flexDirection: "row"}}>
                    <View style={{alignContent: 'center', justifyContent: 'center', marginRight: 10}}>
                        <Image source={props.pic} style={style.image}/>
                    </View>
                    <View style={{alignContent: 'center', justifyContent: 'center'}}>
                        <View>
                            <Title style={style.titleText}>{props.name}</Title>
                        </View>
                        <View>
                            <Paragraph style={style.dataText}><IconIO name="mail-outline" size={15} color={textPrimary} />: {props.email}</Paragraph>
                            <Paragraph style={style.dataText}><IconFA name="whatsapp" size={15} color={textPrimary} />: {props.wa}</Paragraph>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        marginVertical: 7,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    titleText: {
        color: textPrimary,
        fontSize: 16
    },
    dataText: {
        color: textPrimary,
        fontSize: 12
    }
})

export default CardPerson;