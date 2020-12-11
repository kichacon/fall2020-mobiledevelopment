import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList, Switch,} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home(props) {
 var [name, setName] = useState('User');
  return (
    <View style ={styles.container}>
      
    <Text style={styles.Titletext}>Welcome, {name} </Text>
    <TextInput onChange={e => setName(e.target.value)} style={styles.formtext} placeholder="username or e-mail"/> 
   
    <TextInput style={styles.formtext} placeholder="password"/> 
    <Button title="Sign In" onPress={() => props.navigation.navigate('InitialScreen')} />
</View>
  
  );
}

function InitialScreen(props) {
    
  return (
    <View style ={styles.container}>
      <Text style={styles.Titletext}>Choose an Option</Text>
    <Button title="Profile Page" onPress={() => props.navigation.navigate('Profile')} /> <br></br>

<Button title="ExerciseOne" onPress={() => props.navigation.navigate('exerciseOne')} /><br></br>
<Button title="ExerciseTwo" onPress={() => props.navigation.navigate('exerciseTwo')} /><br></br>
<Button title="Exercise Log" onPress={() => props.navigation.navigate('Finished')} /> <br></br>
<Button title="Settings" onPress={() => props.navigation.navigate('Settings')} /><br></br>


    </View>
  );
}


function Profile (props) {
 const data = [
   {'name': 'Name: Jane Doe'},
   {'name': 'Age: 25'},
   {'name': 'Exercises for today: 2'},
   {'name': 'Weight: 185 lbs'},


 ];

 const [names, setNames] = useState(data);
   return (
     
     <View style ={styles.container}>
       
       <Text style={styles.Titletext}>Profile Page</Text>
      
     <FlatList data= {names}
     renderItem={({item})=> {
       return <Text style ={styles.formtext}>{item.name}</Text>
     }
     }
     />
          <Button title="Continue to Exercises" onPress={() => props.navigation.navigate('exerciseOne')} /> <br></br>

          <Button title="Back to Home" onPress={() => props.navigation.navigate('InitialScreen')}/>
     </View>
     
     );
    }

    
function exerciseOne(props) {
  const startingCount = 0;
  var [counter, setCounter] = useState(startingCount);

  const incrementFive = () => {
    for(let i=0; i<10; i++){
      setCounter(prevCount => prevCount +1)
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onChange={e => setCounter(e.target.value)} style={styles.titleText}>Burpees Exercise</Text><br></br>
      <Text style={styles.regularText}>Reps Total: {counter}</Text><br></br>
      <Button title="Increase Reps" onPress={() => {setCounter(prevCount => prevCount +1)}}/> <br></br>
      <Button title="Increase Reps by 10" onPress={incrementFive}/> <br></br>

      <Button title="Decrease Reps" onPress={() => {setCounter(prevCount => prevCount -1)}}/> <br></br>
      <Button title="Reset" onPress={() => {setCounter(counter = 0)}}/><br></br><br></br><br></br>
      <Button title="Next Exercise" onPress={() => props.navigation.navigate('exerciseTwo')} />
    </View>
  );
}



function exerciseTwo(props) {
  const initialCount = 0;
  var [counter, setCounter] = useState(initialCount);

  const incrementFive = () => {
    for(let i=0; i<10; i++){
      setCounter(prevCount => prevCount +1)
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.titleText}>Plank</Text><br></br>
      <Text style={styles.regularText}>Reps Total: {counter}</Text><br></br>
      <Button title="Increase Reps" onPress={() => {setCounter(prevCount => prevCount +1)}}/> <br></br>
      <Button title="Increase Reps by 10" onPress={incrementFive}/> <br></br>

      <Button title="Decrease Reps" onPress={() => {setCounter(prevCount => prevCount -1)}}/> <br></br>

      <Button title="Reset" onPress={() => {setCounter(counter = 0)}}/><br></br><br></br><br></br>
      <Button title="Continue" onPress={() => props.navigation.navigate('Finished')} />
    </View>
  );
}





function Finished(props) {
  var [name, setName] = useState('Exercises:');
  var [number, setNumber] = useState('Reps:');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.Titletext}>Congrats, you have finished!</Text>
      <TextInput onChange={e => setName(e.target.value)} style={styles.formtext} placeholder="Enter # of Exercises"/>
      <TextInput onChange={e => setNumber(e.target.value)} style={styles.formtext} placeholder="Enter # of Reps"/>
      <Text style={styles.regularText}>{name}</Text>
      <Text style={styles.regularText}>{number}</Text><br></br>

      <Button title="Back to Home" onPress={() => props.navigation.navigate('InitialScreen')} /><br></br>

<Button title="Settings" onPress={() => props.navigation.navigate('Settings')} />

    </View>
  );
}

function Settings(props) {
  const [isSwitchEnabled, setSwitch] = React.useState(false)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.Titletext}>Change Settings</Text>
      <Text style={styles.regularText}>Notifications: </Text>

<Switch value={isSwitchEnabled}      
onValueChange={(value)=> setSwitch(value)}
trackColor={{true: 'gray', false: 'green'}}/> <br></br>
<Text style={styles.regularText}>Sound: </Text>
<Switch value={isSwitchEnabled}      
onValueChange={(value)=> setSwitch(value)}
trackColor={{true: 'gray', false: 'green'}}Hello/> <br></br>

<Button title="Back to Home" onPress={() => props.navigation.navigate('Home')} />

    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  regularText: {
    color: "gray",
    fontSize: 40,
    fontFamily: "sans-serif",
    alignItems: 'center',
  },

  homeText: {
    color: "orange",
    fontSize: 70,
    fontFamily: "sans-serif",
    fontWeight: "bold"
    },
    titleText: {
      color: "black",
      fontSize: "50px",
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: "black",
      borderBottomWidth: 2,
    },
      Titletext: {
        color: "black",
        fontWeight: 'bold',
        fontSize: "40px",
        paddingBottom: 100,
        borderBottomColor: "black",
      borderBottomWidth: 2,
      marginBottom: 20,
      textAlign: 'center',
      
  },
  formtext: {
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
  buttonText:{
      color: "gray",
      fontWeight: 'bold',
      fontSize: "20px",
  }
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerTitle: "Sign In", headerTitleAlign:'center'}} name="Home" component={Home} />
        <Stack.Screen options={{headerTitle: "Home Page", headerTitleAlign:'center'}} name="InitialScreen" component={InitialScreen} />
        <Stack.Screen options={{headerTitle: "Your Profile", headerTitleAlign:'center'}} name="Profile" component={Profile} />
        <Stack.Screen options={{headerTitle: "Exercise 1", headerTitleAlign:'center'}} name="exerciseOne" component={exerciseOne} />
        <Stack.Screen options={{headerTitle: "Exercise 2", headerTitleAlign:'center' }} name="exerciseTwo" component={exerciseTwo} />
        <Stack.Screen options={{headerTitle: "Exercise Log", headerTitleAlign:'center'}} name="Finished" component={Finished} />
        <Stack.Screen options={{headerTitle: "Settings", headerTitleAlign:'center'}} name="Settings" component={Settings} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;