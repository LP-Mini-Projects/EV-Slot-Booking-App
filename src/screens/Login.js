import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  // useEffect(() => {
  //   saveData();
  // }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tok, setTok] = useState();

  //console.log(email);
  const saveData = async () => {
    const STORAGE_KEY1 = '@save_token';
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Cookie',
      'csrftoken=aBugKE4huNVscf0CJpQYYGWYM4Zd34afYp5yIH8hSkzPLrDTiK5gmbFMxokSXQZW; sessionid=uw9jqj1994dn44tl7i2olnkpga6frsw6',
    );

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('https://findmyplug.herokuapp.com/login/', requestOptions)
      .then(response => response.json())
      .then(result => {
        setTok(result.token);
        console.log(result.token);
        AsyncStorage.setItem(STORAGE_KEY1, result.token);
      })
      .catch(error => console.log('error', error));
    // try {
    //   //await AsyncStorage.clear();
    //    AsyncStorage.setItem(STORAGE_KEY1, token);
    //   console.log(STORAGE_KEY1);
    // } catch (e) {
    //   //console.log(token);
    //   Alert.alert('Failed to save the data to the storage');
    // }
  };
  //console.log(token);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.image} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            label={'Email'}
            autoCapitalize="none"
            placeholder="Email..."
            placeholderTextColor="#768991"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            label={'Password'}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
            placeholderTextColor="#768991"
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Text style={styles.text}>Remember Me Forget Password?</Text>
        <TouchableOpacity
          onPress={() => {
            saveData();
            navigation.navigate('CarDetails');
          }}>
          <View style={styles.buttonview}>
            <Text style={styles.button}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.label}>
          --------------------OR------------------
        </Text>
        <Text style={styles.label1}>SIGN IN with GOOGLE</Text>
        <Text style={styles.paragraph}>
          Don't have an account?
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.highlight}>  Create an account</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
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
    marginTop: 30,
    marginLeft: 50,
    marginRight: 20,
    resizeMode: 'contain',
    height: 150,
    width: 300,
  },
  inputView: {
    height: 45,
    width: 325,
    paddingLeft: 10,
    margin: 15,
    marginLeft: 35,
    borderWidth: 1,
    borderColor: '#768991',
    borderStyle: 'solid',
    borderRadius: 15,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  text: {
    margin: 0,
    marginLeft: 35,
    color: '#768991',
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonview: {
    width: 300,
    height: 40,
    backgroundColor: '#1f2128',
    borderColor: '#69fff1',
    borderWidth: 2,
    marginLeft: 50,
    marginTop: 55,
  },
  button: {
    color: '#69fff1',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    marginTop: 3,
  },
  label: {
    margin: 20,
    marginLeft: 50,
    color: '#768991',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label1: {
    margin: 0,
    marginLeft: 100,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    margin: 50,
    marginLeft: 55,
    color: '#768991',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    color: 'white',
  },
});
