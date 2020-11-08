import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Kiara Chacon</Card.Title>
        <Text>Tacos</Text>
        <Card.Divider />
        <Text>Sushi</Text>
        <Card.Divider />
        <Button title="Submit"></Button>
      </Card>
      <StatusBar style="auto" />
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
