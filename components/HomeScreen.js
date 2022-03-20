import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useContext } from 'react';
import AppContext from './AppContext';
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from '@react-navigation/native';

export function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Begin COVID-19 Assessment </Text>
      <StatusBar style="auto" />

      <Button
        title="Go to eval screen"
        onPress={() => navigation.navigate('EvalScreenOne')}
        style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 30, color: 'white' }}>Continue</Text>
      </Button>
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