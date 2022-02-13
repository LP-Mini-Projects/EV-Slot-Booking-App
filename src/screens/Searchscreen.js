// import React, { useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
//   FlatList,
//   Text,
//   ImageBackground,
//   Alert,
// } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// export default Search = ({ navigation }) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setLoading] = useState(true);

//   var myHeaders = new Headers();
//   myHeaders.append("Authorization", "Token 1e9e42d0589cc31b4438726a339ad8e9dd2f235f");

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };

//   fetch("https://findmyplug.herokuapp.com/station/", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));


//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.item}>
//         <Text
//           style={{
//             fontSize: 25,
//             fontWeight: 'bold',
//             textAlign: 'center',
//             color: 'yellow',
//             fontStyle: 'italic',
//           }}>
//           {item.title}
//         </Text>

//       </View>
//     );
//   };

//   return (
//     <View >
//       <View>
//         <View style={styles.inputCard}>
//           <TextInput
//             style={styles.input}
//             placeholder={'SEARCH'}
//             placeholderTextColor="white"


//           />
//           <TouchableOpacity style={styles.searchbutton}>

//           <FontAwesome5
//             name='search'
//             size={25}
//             color={'white'}
//           /> 
//           </TouchableOpacity>
//           {/* <View style={styles.container}>

//             <FlatList
//               data={data}
//               keyExtractor={({ id }) => id}
//               contentContainerStyle={{}}
//               renderItem={renderItem}
//             />

//           </View> */}

//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1f2128',
//   },
//   searchbutton:{
//     marginRight:10
//   },
//   input: {
//     padding: 7,
//     flex: 1,
//     borderBottomColor: "white",
//     color: "white",
//   },
//   inputCard: {
//     position: 'absolute',
//     top: 10,
//     margin: 20,
//     left: 10,
//     right: 10,
//     flexDirection: 'row',
//     backgroundColor: '#1f2128',
//     alignItems: 'center',
//     borderRadius: 5,
//     zIndex: 100,
//     borderColor: "white",
//     borderWidth: 0.5,
//   },
// });

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

