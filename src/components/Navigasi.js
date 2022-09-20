import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet, Image } from "react-native";
import { otherColor, textPrimary, textSecondary } from '../utils/Color-Pallete';

const Navigasi = () => (
  <Appbar.Header style={style.navigasi}>
    {/* <Appbar.BackAction  onPress={() => {}} /> */}
    <Appbar.Action icon="menu" onPress={() => {}} />
    <Image source={require('../assets/icons/covid-tracker-logo.png')} style={style.image}/>
    <Appbar.Content title="Covid Tracker" />
  </Appbar.Header>
);

const style = StyleSheet.create({
  navigasi: {
      backgroundColor: otherColor,
      borderBottomColor: textPrimary,
  },
  image: {
      width: 35,
      height: 35,
      marginRight: 10
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

export default Navigasi;