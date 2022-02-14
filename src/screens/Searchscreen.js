import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Text,
  ImageBackground,
  Alert,
  Dimensions
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ProgressBar from './ProgressBar';

export default function Search() {
  const [data, setData] = useState([]);
  const [searchNow, setSearchNow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //   var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Token 1e9e42d0589cc31b4438726a339ad8e9dd2f235f");

    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow'
    // };

    // fetch("https://findmyplug.herokuapp.com/station/", requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result);
    //     setData(result.data);
    //   })

    //   .catch(error => console.log('error', error));
    const value = await AsyncStorage.getItem('@save_token');
    var config = {
      method: 'get',
      url: 'https://findmyplug.herokuapp.com/station/',
      headers: {
        'Authorization': `Token  ${value}`
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);

      })
      .catch(function (error) {
        console.log(error);
      });


  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
    
<Text style={styles.title}>{item.station_name}</Text>
<Text style={{ color: 'white', fontWeight: 'bold' }}>ADDRESS</Text>
<Text style={{ color: 'white', fontSize: 10 }}>
  {item.location}
</Text>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <ProgressBar star_rating={item.star_rating} />
  <Text style={{ color: 'white', fontWeight: 'bold' }}>
    {item.star_rating}
  </Text>
</View>
<>
  <Text style={{ color: 'white', fontWeight: 'bold' }}>WORKING HOURS</Text>
  <Text style={{ color: 'white', fontSize: 10 }}>{item.working_hours}</Text>
</>
</View>

    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder={'SEARCH'}
            placeholderTextColor="white"
            // value={searchTerm}
            // onChangeText={(text) => setSearchTerm(text)}
          />
               <TouchableOpacity
            onPress={() => {
              // console.log('pressed');
              // setSearchNow(!searchNow);
            }}>
              <FontAwesome5
                  name={"search" ? 'search' : 'refresh'}
                  size={20}
                  color={'white'}
                />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          contentContainerStyle={{}}
          renderItem={renderItem}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2128',
  },
  input: {
    padding: 7,
    flex: 1,
    borderBottomColor: "white",
    color: "white",
  },
  inputCard: {
    position: 'absolute',
    margin: 20,

    flexDirection: 'row',
    backgroundColor: '#1f2128',
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 100,
    borderColor: "white",
    borderWidth: 0.5
  },
  infoCard: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    top: 40,
    paddingRight: 10,
    backgroundColor: 'rgba(21,21,21,0.5)',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },

  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
 card: {
    
  marginTop:70,
  marginLeft:20,
    justifyContent: 'space-evenly',
  },
  textInfo: {
    left: 10,
    right: 10,
    flex: 1,
   
    marginTop:40,
    marginLeft:20,
    justifyContent: 'space-evenly',
  },
});

