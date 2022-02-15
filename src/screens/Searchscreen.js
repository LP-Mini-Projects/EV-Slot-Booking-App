import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ProgressBar from './ProgressBar';

export default function Search() {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
        setFilteredData(response.data);
        setMasterData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });


  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.station_name
          ? item.station_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>STATION NAME</Text>
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
          <Text style={{ color: 'white', fontWeight: 'bold' }}>CITY</Text>
          <Text style={{ color: 'white', fontSize: 10 }}>{item.city}</Text>
        </>
        <>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>PHONE NUMBER</Text>
          <Text style={{ color: 'white', fontSize: 10 }}>{item.phone_no}</Text>
        </>
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
            clearButtonMode="always"
            value={search}
            onChangeText={(text) => searchFilter(text)}
          />
          <TouchableOpacity
            onPress={() => {
            }}>
            <FontAwesome5
              name={"search" ? 'search' : 'refresh'}
              size={20}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredData}
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

    marginTop: 70,
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
  textInfo: {
    left: 10,
    right: 10,
    flex: 1,

    marginTop: 40,
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
});