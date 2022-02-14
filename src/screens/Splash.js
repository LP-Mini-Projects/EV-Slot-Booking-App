
import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Login from './Login';
import LottieView from 'lottie-react-native';

export default function Splash({navigation}) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/splash1.json')}
        autoPlay={true}
        loop
      
        style={styles.animation}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2128',
  },
  animation: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
    marginLeft: 60,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 110,
  },
});

  {/* {item.id}
{item.star_rating}
{item.station_name}
{item.location}
{item.city}
{item. working_hours}
{item.active_status}
{item.photos} */}

// <View style={styles.textInfo}>
// <Text style={styles.title}>{item.station_name}</Text>
// <Text style={{ color: 'white', fontWeight: 'bold' }}>ADRESS</Text>
// <Text style={{ color: 'white', fontSize: 10 }}>
//   {item.location}
// </Text>
// <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//   <ProgressBar star_rating={item.star_rating} />
//   <Text style={{ color: 'white', fontWeight: 'bold' }}>
//     {item.star_rating}
//   </Text>
// </View>
// <>
//   <Text style={{ color: 'white', fontWeight: 'bold' }}>WORKING HOURS</Text>
//   <Text style={{ color: 'white', fontSize: 10 }}>{item.working_hours}</Text>
// </>
// </View>
// </View>