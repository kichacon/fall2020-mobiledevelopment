import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Button, text, Input} from 'react-native-elements';

export default function App() {
 // let optionone = useState("UglySweaterContest");

  return (
    <View style={styles.container}>
      <text>Vote on what Christmas activity you would like to see next:</text><br></br>

    <Button title="Ugly Sweater Contest" onPress={ () => {alert('You chose Ugly Sweater Contest'); }} /><br></br>
    
    <Button title="Gift Exchange" onPress={ () => {alert('You chose Gift Exchange'); }} /><br></br>
    <Button title="White Elephant" onPress={ () => {alert('You chose White Elephant'); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
