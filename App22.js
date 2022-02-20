import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [condition, setCondition] = useState('Unknown');
  const [age, setAge] = useState('Unknown');
  return (
    
    <View style={styles.container}>
      
      <Text>Select a State:</Text>
      <Picker
        selectedValue={condition}
        onValueChange={(value, index) => setCondition(value)}
        style={styles.picker}
      >
        <Picker.Item label="Alabama" value=" 1" />
        <Picker.Item label="Alaska" value="2 " />
        <Picker.Item label="Arizona" value="3 " />
        <Picker.Item label="Arkansas" value="4 " />
        <Picker.Item label="California" value="5 " />
        <Picker.Item label="Colorado" value=" 7" />
        <Picker.Item label="Connecticut" value="8 " />
        <Picker.Item label="Delaware" value=" 9" />
        <Picker.Item label="Florida" value="10 " />
        <Picker.Item label="Georgia" value="11 " />
        <Picker.Item label="Hawaii" value="12 " />
        <Picker.Item label="Idaho" value="13 " />
      </Picker>
      <Text>Select County:</Text>
      <Picker
        selectedValue={age}
        onValueChange={(value, index) => setAge(value)}
        style={styles.picker}
      >
        <Picker.Item label="Apache" value="1" />
        <Picker.Item label="Cochise" value="2" />
        <Picker.Item label="Coconino" value="3" />
        <Picker.Item label="Gila" value="4" />
        <Picker.Item label="Graham" value="44" />
        <Picker.Item label="Greenlee" value="444" />
        <Picker.Item label="La Paz" value="444" />
        <Picker.Item label="Maricopa" value="5" />
      </Picker>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <StatusBar style="auto" />
      <Button
        title="Next"
      />
    </View>
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
});


