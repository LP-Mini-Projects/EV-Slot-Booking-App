import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import LottieView from 'lottie-react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/splash1.json')}
        autoPlay={true}
        loop
        style={styles.animation}
      />
      <Image source={require('../assets/logo.png')} style={styles.image} />
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
