import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function CarDetails({navigation, route}) {
  let token = route.params.t;
  const [reg,setReg]=useState('');
  const [vin,setVin]=useState('');
  const [model,setModel]=useState('');
  const [plug,setPlug]=useState('');

  const saveData = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      `Token  ${token}`,
    );
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Cookie',
      'csrftoken=3waWJwVEz4D6LxeYfcmWwnvPWyqw8dfFc3NoLbD2qx7YjTTvnkI1rXIroGY73ovv; sessionid=1cbd4sze5lwmf948fagzpu2u53n5hi2m',
    );

    var raw = JSON.stringify({
      registration_no: reg,
      vehicle_identification_no:vin,
      vehicle_model: model,
      plug_type: plug,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://findmyplug.herokuapp.com/vehicles/', requestOptions)
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
          placeholder="Registration Number"
          placeholderTextColor="#768991"
          onChangeText={text => setReg(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="VIN"
          placeholderTextColor="#768991"
          onChangeText={text => setVin(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Model Number "
          placeholderTextColor="#768991"
          onChangeText={text => setModel(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Plug Type"
          placeholderTextColor="#768991"
          onChangeText={text => setPlug(text)}
        />
      </View>
      <TouchableOpacity
        onPress={() => saveData,navigation.navigate('bottomTabNavigations')}>
        <View style={styles.buttonview}>
          <Text style={styles.button}>PROCEED</Text>
        </View>
      </TouchableOpacity>
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
    marginBottom: 50,
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
    marginTop: 95,
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
