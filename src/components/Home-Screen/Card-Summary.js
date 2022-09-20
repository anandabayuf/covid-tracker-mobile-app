import React from 'react';
import { View, StyleSheet, Image } from "react-native"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { textPrimary } from '../../utils/Color-Pallete';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardSummary = (props) => {
    const cardStyle = {
        borderRadius: 20, 
        backgroundColor:  props.title === "Total Confirmed" ? "#ffc107" : props.title === "Total Recovered" ?  "#198754" : "#dc3545"
    }

    const icon = props.title === "Total Confirmed" ? require('../../assets/icons/confirmed.png') : 
    props.title === "Total Recovered" ?  require('../../assets/icons/recovered.png') : 
    require('../../assets/icons/deaths.png')
    
    return (
        <View style={style.card}>
            <Card mode='elevated' style={cardStyle}>
                <Card.Content style={{flexDirection: "row"}}>
                    <View style={{flex: 1, alignContent: 'center'}}>
                        {/* <Image source={require('../../assets/icons/recovered.png')} style={style.image}/> */}
                        <Image source={icon} style={style.image}/>
                    </View>
                    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                        <View style={{marginBottom: 10}}>
                            <Paragraph style={style.titleText}>{props.title}</Paragraph>
                        </View>
                        <View style={{alignSelf: 'flex-end'}}>
                            <Title style={style.dataText}>{props.data}</Title>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    image: {
        width: 100,
        height: 100,
    },
    titleText: {
        color: textPrimary,
        fontSize: 16
    },
    dataText: {
        color: textPrimary,
        fontSize: 24
    }
})

export default CardSummary;