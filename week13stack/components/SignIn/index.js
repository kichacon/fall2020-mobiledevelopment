import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity,} from 'react-native';






class SignIn extends React.Component {
    render () {
        const titletext = {
            color: "white",
            fontSize: "50px",
            paddingBottom: 10,
            marginBottom: 40,
            borderBottomColor: "black",
            borderBottomWidth: 2,
            
        };
        const formtext = {
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
            
        };
        const stylebutton = {
            backgroundColor: "white",
            marginTop: 30, 
            padding: 20,
            alignItems: 'center'
          };
        const buttonText = {
            color: "gray",
            fontWeight: 'bold',
            fontSize: "20px",
        };
         // const form ={
             // alignSelf: 'stretch',
         // }
    return (
       <View >
           <Text style={titletext}>Sign In</Text>
           <TextInput style={formtext} placeholder="username or e-mail"/> 
           <TextInput style={formtext} placeholder="password"/> 
           <TouchableOpacity style={stylebutton}><Text style={buttonText}>Sign In</Text></TouchableOpacity>
       </View>
        
    );
  }
}

  export default SignIn;