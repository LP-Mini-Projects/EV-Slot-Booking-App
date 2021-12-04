import React from 'react';
import {StyleSheet, View, Text, Image, Button,TextInput} from 'react-native';

export default function Signup() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.image} />
            <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            placeholderTextColor="#768991"
           />
            </View>
            <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#768991"
           />
           </View>
           <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Mobile Number" 
            placeholderTextColor="#768991"
           />
            </View>
            <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Pincode" 
            placeholderTextColor="#768991"
           />
            </View>
            <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#768991"
           />
            </View>
         <View style={styles.buttonview}>
         <Text style={styles.button}>SIGNUP</Text>
         </View>
         <Text style={styles.paragraph}>
          Already have an account?
        <Text style={styles.highlight}>Sign in</Text>
      </Text>
         
            
            
            
            </View>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f2128',
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginLeft:50,
        marginRight:20,
        resizeMode: "contain",
        height: 150,
        width: 300,
      },
      inputView:{
        height: 45,
        width:325,
        paddingLeft: 10,
        margin:5,
        marginLeft: 35,
        borderWidth: 1,
        borderColor: '#768991',
        borderStyle: 'solid',
        borderRadius: 15
    },
    inputText:{
        height:50,
        color:"white"
      },
      buttonview: {
        width: 300,
        height: 40,
        backgroundColor: '#1f2128',
        borderColor:'#69fff1',
        borderWidth:2,
        marginLeft: 50,
        marginTop: 55,
      },
      button: {
        color: '#69fff1',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Source Sans Pro',
        fontWeight:"bold",
        marginTop: 3,
      },
      paragraph:{
        margin:50,
        marginLeft: 85,
        color:"#768991",
        fontSize: 15,
        justifyContent:"center",
        alignItems:"center"
      },
      highlight: {
        color: "white",
      }, 
      
    });