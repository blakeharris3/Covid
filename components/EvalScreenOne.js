import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useContext } from 'react';
import AppContext from './AppContext';
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from '@react-navigation/native';

export function EvalScreenOne ({navigation}) {

  const myContext = useContext(AppContext);
  return (

  <View style={styles.container}>
      <Text>Select Age Range:</Text>
      <Picker
        selectedValue={myContext.userAge}

        // onValueChange={(value, index) => setAge(value)}
        onValueChange={myContext.setAge}
        style={styles.picker}
      >
        <Picker.Item label="Age Range" value=" " />
        <Picker.Item label="<14" value="<14" />
        <Picker.Item label="15-25" value="15-25" />
        <Picker.Item label="26-40" value="26-40" />
        <Picker.Item label="40-55" value="40-55" />
        <Picker.Item label="56+" value="56+" />
      </Picker>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>Pre Existing Condition:</Text>
      <Picker
        selectedValue={myContext.userCondition}
        onValueChange={myContext.setCondition}
        style={styles.picker}
      >
        <Picker.Item label="Select Condition" value=" " />
        <Picker.Item label="None" value=" " />
        <Picker.Item label="Diabetes" value="Diabetes" />
        <Picker.Item label="Asthma" value="Asthma" />
        <Picker.Item label="High Blood Pressure" value="Pressure" />
        <Picker.Item label="Heart Disease" value="Heart" />
        <Picker.Item label="Lung Disease" value="Lung" />
      </Picker>
      <StatusBar style="auto" />
      <Button
        title="Next"
        onPress={() => navigation.navigate('EvalScreenTwo')}
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