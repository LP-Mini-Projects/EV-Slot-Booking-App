/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Payment from './Payment';
export default function Booking({navigation}) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.header}>Booking ID:</Text>
        <Text style={styles.header}>Address:</Text>
        <Text style={styles.header}>Plug Type:</Text>
      </View>
      <View style={styles.col}>
        <View style={styles.container2}>
          <TouchableOpacity onPress={showDatepicker}>
            <Image
              source={require('../assets/date.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>DATE</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity onPress={showTimepicker}>
            <Image
              source={require('../assets/time.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>TIME</Text>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="spinner"
            onChange={onChange}
          />
        )}
      </View>
      <View style={styles.col}>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/capacity.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>CAPACITY</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity>
            <Image
              source={require('../assets/amount.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>AMOUNT</Text>
        </View>
      </View>
      <View style={styles.buttonview}>
        {/* <TouchableOpacity onPress={Payment}> */}
        <Text style={styles.button}>CONFIRM BOOKING</Text>
        {/* </TouchableOpacity> */}
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
    marginTop: 20,
  },
  col: {
    flexDirection: 'row',
    marginTop: 50,
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
    marginTop: 15,
  },
  buttonview: {
    width: 150,
    height: 40,
    backgroundColor: '#1f2128',
    borderColor: '#69fff1',
    borderWidth: 2,
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
  image: {
    marginTop: 15,
    alignSelf: 'center',
  },
});
