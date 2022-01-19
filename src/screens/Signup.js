import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Signup({navigation}) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [contact, setContact] = useState();
  const [pincode, setPincode] = useState();
  const saveData = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Cookie',
      'csrftoken=38nEC8N6KwnhV9tDih1n18PQdK0hhMvWBLSpsUcjpwCA4h82dChCSpUZ4rEseLqH; sessionid=1cbd4sze5lwmf948fagzpu2u53n5hi2m',
    );

    var raw = JSON.stringify({
      email: email,
      password: password,
      phone: contact,
      pincode: pincode,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('https://findmyplug.herokuapp.com/register/', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#768991"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#768991"
          onChangeText={text => setemail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mobile Number"
          placeholderTextColor="#768991"
          onChangeText={text => setContact(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Pincode"
          placeholderTextColor="#768991"
          onChangeText={text => setPincode(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#768991"
          onChangeText={text => setpassword(text)}
        />
      </View>
      <TouchableOpacity onPress={() => saveData,navigation.navigate('CarDetails'),Alert.alert('Check your Email')}>
        <View style={styles.buttonview}>
          <Text style={styles.button}>SIGNUP</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.paragraph}>
        Already have an account?
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.highlight}>Sign in</Text>
        </TouchableOpacity>
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
    margin: 5,
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
  paragraph: {
    margin: 50,
    marginLeft: 85,
    color: '#768991',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    color: 'white',
  },
});
