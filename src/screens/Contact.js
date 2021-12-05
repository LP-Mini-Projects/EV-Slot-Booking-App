/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import animationData from './animation.json';

export default function Contact() {
  const [isFav, setisFav] = useState(false);
  const [isGood, setisGood] = useState(false);
  const [isBad, setisBad] = useState(false);
  const [isOk, setisOk] = useState(false);
  const [text, onChangeText] = React.useState();
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
        }}>
        <Text style={styles.label1}>Rate your experience</Text>
      </View>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 75,
          marginRight: 75,
        }}>
        <TouchableOpacity
          onPress={() => {
            setisOk(prev => !prev);
            Alert.alert(
              'Not satisfied',
              'We will surely work on your feedback',

              [{text: 'Okay'}],
            );
          }}>
          {isOk ? (
            <FontAwesome5
              name={"sad-tear"}
              size={40}
              color="#69FFF1"></FontAwesome5>
          ) : (
            <FontAwesome5
              name={"sad-tear"}
              size={40}
              color="white"></FontAwesome5>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setisFav(prev => !prev);
            Alert.alert('Not that great!', 'Sorry , we will try to improve', [
              {text: 'Okay'},
            ]);
          }}>
          {isFav ? (
            <FontAwesome5
              name={'frown'}
              size={40}
              color="#69FFF1"></FontAwesome5>
          ) : (
            <FontAwesome5 name="frown" size={40} color="white"></FontAwesome5>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setisGood(prev => !prev);
            Alert.alert('Liked it!', 'Thank you for the feedback', [
              {text: 'Okay'},
            ]);
          }}>
          {isGood ? (
            <FontAwesome5
              name={'grin-alt'}
              size={40}
              color="#69FFF1"></FontAwesome5>
          ) : (
            <FontAwesome5
              name="grin-alt"
              size={40}
              color="white"></FontAwesome5>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setisBad(prev => !prev);
            Alert.alert(
              'Loved it!',
              'We are delighted to know you loved our services',
              [{text: 'Okay'}],
            );
          }}>
          {isBad ? (
            <FontAwesome5
              name={'grin-hearts'}
              size={40}
              color="#69FFF1"></FontAwesome5>
          ) : (
            <FontAwesome5
              name="grin-hearts"
              size={40}
              color="white"></FontAwesome5>
          )}
        </TouchableOpacity>
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter your message"
        />
      </SafeAreaView>
      <View style={styles.buttonview}>
        <Text style={styles.button}>SUBMIT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2128',
  },

  label1: {
    color: '#768991',
    fontSize: 15,

    fontFamily: 'Source Sans Pro',
    marginTop: 8,
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
    fontSize: 18,
  },
  input: {
    height: 125,
    marginLeft: 70,
    marginRight: 70,
    borderWidth: 0.5,
    padding: 10,
    backgroundColor: '#768991',
  },
  buttonview: {
    width: 150,
    height: 40,
    backgroundColor: '#1f2128',
    borderColor: '#69fff1',
    borderWidth: 2,
    marginLeft: 125,
    margin: 25,
  },
  animation: {
    width: 120,
    height: 120,
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
