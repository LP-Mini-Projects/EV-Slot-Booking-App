import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Search() {
  
  return (
    <View style={styles.container}>
       <View>
        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder={'SEARCH'}
            placeholderTextColor="white"
            
            
          />
          <TouchableOpacity
            onPress={() => {
             
            }}>
              <FontAwesome5
                  name= 'search'
                  size={25}
                  color={'white'}
                />
          </TouchableOpacity>
          
        </View>
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
    borderBottomColor:"white",
    color:"white",
  },
  inputCard: {
    position: 'absolute',
    top: 10,
    margin: 20,
    left: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: '#1f2128',
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 100,
    borderColor:"white",
    borderWidth:0.5
  },
});
