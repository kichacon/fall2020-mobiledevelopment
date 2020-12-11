import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Home extends Component {
  state = {
    buttonEnabled:true,
  }
  render(){
 const buttonColor = this.state.buttonEnabled ? 'red' : 'blue'
  return (
     <View >
           <Text style={styles.titleText}>Sign In</Text>
           <TextInput style={styles.formtext} placeholder="username or e-mail"/> 
           <TextInput style={styles.formtext} placeholder="password"/> 
           <TouchableOpacity style={[styles.stylebutton, {backgroundColor:buttonColor}]}><Text style={styles.buttonText}>Sign In</Text></TouchableOpacity>
      
      <Button title="Start Exercises" onPress={() => props.navigation.navigate('exerciseOne')} />
    </View>
  
}}

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
  homeText: {
    color: "orange",
    fontSize: 70,
    fontFamily: "sans-serif",
    fontWeight: "bold"
    },
      container: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: 'center',
        justifyContent: 'center',
      },
      titleText: {
        color: "black",
        fontWeight: 'bold',
        fontSize: "40px",
        paddingBottom: 100,
      },

    formtext:{
        color: "white",
        fontSize: "20px",
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        borderTopColor: "black",
        borderTopWidth: 1,
        borderLeftColor: "black",
        borderLeftWidth: 1,
        paddingLeft: 10,
        borderRightColor: "black",
        borderRightWidth: 1,
        justifyContent: 'center',
        
    },
    stylebutton: {
        backgroundColor: "white",
        marginTop: 30, 
        padding: 20,
        alignItems: 'center'
      },
    buttonText: {
        color: "gray",
        fontWeight: 'bold',
        fontSize: "20px",
    },
    
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
