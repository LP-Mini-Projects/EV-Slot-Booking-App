/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function Payment() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Total Amount to Pay</Text>
      <View style={styles.container1}>
        <Text style={styles.label}>Rs._ _ _</Text>
      </View>
      <Text style={styles.label1}>Transaction ID:XXX XXX XXX</Text>
      <Image source={require('../assets/paytm.png')} style={styles.image} />
      <View style={styles.buttonview}>
        <Text style={styles.button}>MAKE PAYMENT</Text>
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
    marginTop: 20,
  },
  label1: {
    color: '#768991',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 50,
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
    borderColor:'#69fff1',
    borderWidth:2,
    marginLeft: 125,
    marginTop: 20,
  },
  button: {
    color: '#69fff1',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 8,
  },
});
