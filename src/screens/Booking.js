
import React, { useState,useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  FlatList
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Payment from './Payment';
export default function Booking({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [duration, setDuration] = useState(0)
  const route = useRoute();
  const plugid= route.params.id;
  const [data, setdata]= useState([]);

  
  useEffect(() => {
    saveData();
  }, []);

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
  const saveData = async () => {
    const value = await AsyncStorage.getItem('@save_token');
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Token  ${value}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=6zxIticknTN71RTD8c8rNHQwTZ4AfPE8u3qj8XH0HJZTFeYT2qGhd2DV7sDE3b9V; sessionid=lbfl3rczbptkaipjeaarjqc0ub7suxfi");

    var formdata = new FormData();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      
      redirect: 'follow'
};

 await fetch(`https://findmyplug.herokuapp.com/slot/?station=${plugid}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then(result => {
    setdata(result);
    console.log(data);
  })
  .catch(error => console.log('error', error));
}

  console.log(route.params.id);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.header}>Station Name: {route.params.station_name}</Text>
        <Text style={styles.header}>Address: {route.params.location}</Text>
        <Text style={styles.header}>Phone No: {route.params.phone_no}</Text>
        <Text style={styles.header}>Id: {route.params.id}</Text>
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
          <TouchableOpacity>
            <Image
              source={require('../assets/capacity.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.label}>CAPACITY</Text>
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
      <View>
        <Text style={styles.title}>PLUG TYPE</Text>
        <FlatList 
        
        data={data}
        keyExtractor={({ id }) => id}
          contentContainerStyle={{}}
        renderItem={({item}) => <Text style={styles.title}>{item.charger_type}</Text> }
      />

      </View>
      <View>
        <Text style={styles.title}>DURATION</Text>
      </View>
      <View style={styles.container}>
        <Slider
                 style={styles.slider}
                minimumValue={0}
                maximumValue={10}
                
                step={2}
                minimumTrackTintColor="blue"
                maximumTrackTintColor="gray"
                thumbTintColor="#b9e4c9"
                
                onValueChange={(value) => setDuration(value)}
              />
        <Text  style={styles.title}>Total Duration: {duration}</Text>
      </View>
      <View style={styles.buttonview}>
        <TouchableOpacity>
          <Text style={styles.button}>FIND SLOTS</Text>
        </TouchableOpacity>
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
    marginLeft: hp('30%'),
    marginTop: hp('5%'),
  },
  container2: {
    width: 130,
    height: 100,
    backgroundColor: 'white',
    marginLeft: hp('5%'),
    marginTop: hp('5%'),
  },
  col: {
    flexDirection: 'row',
    // marginTop: hp('10%'),

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
    marginTop: hp('2%'),
  },
  buttonview: {
    width: 150,
    height: 40,
    backgroundColor: '#1f2128',
    borderColor: '#69fff1',
    borderWidth: 4,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal :130,
    marginBottom:30,

   
  },
  button: {
    color: '#69fff1',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: hp('0.5%'),
    justifyContent:'center',
    alignItems:'center',

  },
  image: {
    marginTop: hp('2.5%'),
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    marginLeft: hp('5%'),
    marginTop: hp('5%'),
  },
  slider: {
    height: 45,
    
    marginLeft: hp('5%'),
  },
});
