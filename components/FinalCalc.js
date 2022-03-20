import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useContext } from 'react';
import AppContext from './AppContext';
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from '@react-navigation/native';

export function FinalCalc ({navigation}) {
  const myContext = useContext(AppContext);
  const ageWeight = {
    " ":0,
    "<14":10,
    "15-25":20,
    "26-40":30,
    "40-55":40,
    "56+":50,
  };

  const conditionWeight = {
    " ":0,
    "Diabetes": 10,
    "Asthma":30,
    "Pressure": 10,
    "Heart":20,
    "Lung":40,
  }

  const numOfPeopleWeight = {
    " ":0,
    "5":10,
    "15-25":20,
    "25-100":30,
    "100-500":40,
    "501+":50,
  }

  const destinatoinSizeWeight = {
    " ":0,
    "extra small":30,
    "small":25,
    "medium":20,
    "large":15,
    "extra large":10,
    "infinite":5.
  }

  const chanceOfDeath = (myContext.userDeaths / myContext.userCases);
  const finalScore = (ageWeight[myContext.userAge] + conditionWeight[myContext.userCondition]+ numOfPeopleWeight[myContext.userNumOfPeople] + destinatoinSizeWeight[myContext.userDestinationSize]) * chanceOfDeath * 100;

  function scoreToText(){
    if(finalScore <= 40){
      return 'LOW RISK'
    }else if(finalScore >= 40 && finalScore <=100){
      return 'MODERATE RISK'
    }else{
      return 'SEVERE RISK'
    }
  }

  return (
    <View style={styles.container}>
        <Text>Your final assesment is:{scoreToText(finalScore)}</Text>
        <StatusBar style="auto" />
        <Button title="Go back" onPress={() => navigation.goBack()} />

        <Button
          title="Back to home screen"
          onPress={() => navigation.popToTop()}
        />
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