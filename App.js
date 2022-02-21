import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>To begin your covid assesment click here</Text>
      <StatusBar style="auto" />

      <Button
        title="Go to eval screen"
        onPress={() => navigation.navigate('EvalScreenOne')}
        style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 30, color: 'white' }}>Click here to conitinue</Text>
      </Button>
    </View>
  )
}

function EvalScreenOne ({navigation}) {
  const [condition, setCondition] = useState('Unknown');
  const [age, setAge] = useState('Unknown');

  return (

  <View style={styles.container}>
      <Text>Select Age Range:</Text>
      <Picker
        selectedValue={age}
        onValueChange={(value, index) => setAge(value)}
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
        selectedValue={condition}
        onValueChange={(value, index) => setCondition(value)}
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

function EvalScreenTwo ({navigation}){
  const [numOfPeople, setNumOfPeople] = useState('Unknown');
  const [destinatoinSize, setDestinationSize] = useState('Unknown');
  return (
  <View style={styles.container}>
      <Text>Select number of people in attendance:</Text>
      <Picker
        selectedValue={numOfPeople}
        onValueChange={(value, index) => setNumOfPeople(value)}
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
      <Text> Destination Size:</Text>
      <Picker
        selectedValue={destinatoinSize}
        onValueChange={(value, index) => setDestinationSize(value)}
        style={styles.picker}
      >
        <Picker.Item label="Select Destination Size" value=" " />
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
        onPress={() => navigation.navigate('FinalCalc')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

function FinalCalc ({navigation}) {
return (
  <View style={styles.container}>
      <Text>Your Final assesment is:</Text>

      <StatusBar style="auto" />
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button
        title="Go back to the Home screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
)
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EvalScreenOne" component={EvalScreenOne} />
        <Stack.Screen name="EvalScreenTwo" component={EvalScreenTwo} />
        <Stack.Screen name="FinalCalc" component={FinalCalc} />
      </Stack.Navigator>

    </NavigationContainer>
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


