import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home(props) {
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.homeText}>Hello, Welcome User!</Text><br></br>
      <Button title="Start Exercises" onPress={() => props.navigation.navigate('exerciseOne')} />
    </View>
  );
}

function exerciseOne(props) {
  var  [counter, setCounter] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.titleText}>Burpees Exercise</Text><br></br>
      <Text style={styles.regularText}>Reps Total: {counter}</Text><br></br>
      <Button style={styles.buttonStyle} title="Increase Reps" onPress={() => {setCounter(counter + 1)}}/> <br></br>
      <Button title="Reset" onPress={() => {setCounter(counter = 0)}}/><br></br>
      <Button title="Next Exercise" onPress={() => props.navigation.navigate('exerciseTwo')} />
    </View>
  );
}

function exerciseTwo(props) {
  var [counter, setCounter] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.titleText}>Plank</Text><br></br>
      <Text style={styles.regularText}>Reps Total: {counter}</Text><br></br>
      <Button title="Increase Reps" onPress={() => {setCounter(counter + 1)}}/> <br></br>
      <Button title="Reset" onPress={() => {setCounter(counter = 0)}}/><br></br>
      <Button title="Back to Home" onPress={() => props.navigation.navigate('Home')} />
    </View>
  );
}

const styles =StyleSheet.create({
  regularText: {
    color: "gray",
    fontSize: 40,
    fontFamily: "sans-serif"
  },
  titleText: {
    color: "orange",
    fontSize: 50,
    fontWeight: "bold"
  },
  homeText: {
    color: "orange",
    fontSize: 70,
    fontFamily: "sans-serif",
    fontWeight: "bold"
    },
  // buttonStyle: {
   //   backgroundColor: "white",
   //   color: "blue"
   // }
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="exerciseOne" component={exerciseOne} />
        <Stack.Screen name="exerciseTwo" component={exerciseTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
