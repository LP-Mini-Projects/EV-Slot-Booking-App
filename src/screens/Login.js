import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login({navigation}) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [token, setToken] = useState('');
  const STORAGE_KEY = '@save_token';
  const saveData = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Cookie',
      'csrftoken=3waWJwVEz4D6LxeYfcmWwnvPWyqw8dfFc3NoLbD2qx7YjTTvnkI1rXIroGY73ovv; sessionid=1cbd4sze5lwmf948fagzpu2u53n5hi2m',
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

    fetch('https://findmyplug.herokuapp.com/login/', requestOptions)
      .then(response => response.text())
      .then(result => {
        setToken(result), console.log(result);
      })
      .catch(error => console.log('error', error));
    try {
      //await AsyncStorage.clear();
      await AsyncStorage.setItem(STORAGE_KEY, token);
      console.log(token);
    } catch (e) {
      //console.log(token);
      Alert.alert('Failed to save the data to the storage');
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          label={'Email'}
          autoCapitalize="none"
          placeholder="Email..."
          placeholderTextColor="#768991"
          onChangeText={text => setemail(text)}
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
          onChangeText={text => setpassword(text)}
        />
      </View>
      <Text style={styles.text}>Remember Me Forget Password?</Text>
      <TouchableOpacity
        onPress={
          (() => saveData, navigation.navigate('CarDetails', {t: token}))
        }>
        <View style={styles.buttonview}>
          <Text style={styles.button}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>--------------------OR------------------</Text>
      <Text style={styles.label1}>SIGN IN with GOOGLE</Text>
      <Text style={styles.paragraph}>
        Don't have an account?
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.highlight}> Create an account</Text>
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
