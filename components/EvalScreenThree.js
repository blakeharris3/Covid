import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useContext } from 'react';
import AppContext from './AppContext';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

export function EvalScreenThree ({navigation}) {
  const myContext = useContext(AppContext);
  const url = `https://disease.sh/v3/covid-19/nyt/states/${myContext.userStateName}?lastdays=1`;

  const getData = async (url) => {
    const res = await axios.get(url);
    const json = await res.data[0];
    console.log(json.cases);
    myContext.setCases(json.cases)
    myContext.setDeaths(json.deaths)
  };

  return (
  <View style={styles.container}>
      <Text>Enter your state:</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.textField}
      onChangeText={myContext.setStateName}
      placeholder="Enter state name:"
      value={myContext.userStateName}
      />
      <Button
        title="Next"
        onPress={
          getData(url),
          () => navigation.navigate('FinalCalc')
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    marginVertical: 20,
    width: 250,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  textField: {
    height: 50,
    borderColor: 'black',
    borderWidth: 3,
    margin:10,
    fontSize:25,
  },
  centerText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize:15,
  },
});