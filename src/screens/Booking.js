import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default function Booking() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.header}>Booking ID:</Text>
        <Text style={styles.header}>Address:</Text>
        <Text style={styles.header}>Plug Type:</Text>
      </View>
      <View style={styles.col}>
      <View style={styles.container2}>
        <Text style={styles.label}>DATE</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.label}>TIME</Text>
      </View></View>
      <View style={styles.col}>
      <View style={styles.container2}>
        <Text style={styles.label}>CAPACITY</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.label}>AMOUNT</Text>
      </View></View>
      <View style={styles.buttonview}>
        <Text style={styles.button}>CONFIRM BOOKING</Text>
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
     backgroundColor: '#1f2128',
    marginLeft: 20,
    marginTop: 40,
  },
  container2: {
    width: 130,
    height: 100,
    backgroundColor: 'white',
    marginLeft: 50,
    marginTop:20,
   
  },
  col:{
    flexDirection:'row',
    marginTop:50,
  },
  header: {
    color: '#768991',
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro',
  },
  label: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 60,
  },
  buttonview: {
    width: 150,
    height: 40,
    backgroundColor: '#1f2128',
    borderColor:'#69fff1',
    borderWidth:2,
    marginLeft: 125,
    marginTop: 70,
  },
  button: {
    color: '#69fff1',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 8,
  },
});
