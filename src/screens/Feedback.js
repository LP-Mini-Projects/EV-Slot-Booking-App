/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import LottieView from 'lottie-react-native';
import animationData from './animation.json';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Feedback() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <View style={styles.container}>
       <LottieView
          options={defaultOptions}
         
          source={require('./animation.json')}
          style={styles.animation}
          autoPlay
         
        />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 200,
          
        }}>
        <FontAwesome style={styles.label1} name="phone" />
        <Text style={styles.label1}>    91-1234567890</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          
        }}>
        <FontAwesome style={styles.label1} name="envelope" />
        <Text style={styles.label1}>    abc@gmail.com</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
         
        }}>
        <FontAwesome style={styles.label1} name="location-arrow" />
        <Text style={styles.label1}>    Hamilton street</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2128',
  },
  container1: {
    width: 220,
    height: 90,
    backgroundColor: 'white',
    marginLeft: 98,
    marginTop: 20,
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 80,
  },
  label: {
    color: '#768991',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 200,
  },
  label1: {
    color: '#768991',
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
},
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 110,
    height: 180,
    width: 180,
  },
  buttonview: {
    width: 150,
    height: 40,
    backgroundColor: '#1f2128',
    borderColor: '#69fff1',
    borderWidth: 2,
    marginLeft: 125,
    marginTop: 20,
  },
  navBarLeftButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 100,
    paddingLeft: 8,
  },

  buttonText: {
    color: 'rgba(255,255,255,0.70)',
    fontSize: 14,
  },
  animation: {
    width: 120,
    height: 120,
    marginTop:75,
    alignItems:"center",
     justifyContent:"center",
     alignSelf:"center",
  },
  button: {
    color: '#69fff1',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 8,
  },
});
