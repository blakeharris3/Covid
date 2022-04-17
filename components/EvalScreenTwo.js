import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useContext } from 'react';
import AppContext from './AppContext';
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from '@react-navigation/native';

export function EvalScreenTwo ({navigation}){

  const myContext = useContext(AppContext);
  return (
  <View style={styles.container}>
      <Text>People In Attendance:</Text>
      <Picker
        selectedValue={myContext.userNumOfPeople}
        onValueChange={myContext.setNumOfPeople}
        style={styles.picker}
      >
        <Picker.Item label="Number of People" value=" " />
        <Picker.Item label="<5" value= "5" />
        <Picker.Item label="15-25" value="15-25" />
        <Picker.Item label="25-100" value="25-100" />
        <Picker.Item label="100-500" value="100-500" />
        <Picker.Item label="501+" value="501+" />
      </Picker>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text> Destination:</Text>
      <Picker
        selectedValue={myContext.userDestinationSize}
        onValueChange={myContext.setDestinationSize}
        style={styles.picker}
      >
        <Picker.Item label="Select Destination" value=" " />
        <Picker.Item label="Home" value="extra small" />
        <Picker.Item label="Small establishment" value="small" />
        <Picker.Item label="Resturant" value="medium" />
        <Picker.Item label="Concert" value="large" />
        <Picker.Item label="Mall" value="extra large" />
        <Picker.Item label="Outdoors" value="infinite" />
      </Picker>
      <StatusBar style="auto" />
      <Button
        title="Next"
        title="Next"
        onPress={() => navigation.navigate('EvalScreenThree')}
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
  centerText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize:15,
  },
});