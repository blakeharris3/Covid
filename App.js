import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppContext from "./components/AppContext";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./components/HomeScreen";
import { EvalScreenOne } from "./components/EvalScreenOne";
import { EvalScreenTwo } from "./components/EvalScreenTwo";
import { FinalCalc } from "./components/FinalCalc";
import { EvalScreenThree } from "./components/EvalScreenThree";

const Stack = createNativeStackNavigator();

export default function App() {
  const [condition, setCondition] = useState('Unknown');
  const [age, setAge] = useState('Unknown');
  const [numOfPeople, setNumOfPeople] = useState('Unknown');
  const [destinatoinSize, setDestinationSize] = useState('Unknown');
  const [stateName, setStateName] = useState('');
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState(0);

  const userValues = {
    userCondition: condition,
    userAge: age,
    userNumOfPeople: numOfPeople,
    userDestinationSize: destinatoinSize,
    userStateName: stateName,
    userCases: cases,
    userDeaths: deaths,
    setCondition,
    setAge,
    setNumOfPeople,
    setDestinationSize,
    setStateName,
    setCases,
    setDeaths,
  };
  return (
    <AppContext.Provider value={userValues}>
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EvalScreenOne" component={EvalScreenOne} />
        <Stack.Screen name="EvalScreenTwo" component={EvalScreenTwo} />
        <Stack.Screen name="EvalScreenThree" component={EvalScreenThree} />
        <Stack.Screen name="FinalCalc" component={FinalCalc} />
      </Stack.Navigator>

    </NavigationContainer>
    </AppContext.Provider>
  );
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
    color: 'white',
    fontWeight: 'bold',
    fontSize:30,
  },
});


