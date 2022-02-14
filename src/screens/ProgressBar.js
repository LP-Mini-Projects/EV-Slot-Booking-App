import React from 'react';

import { View } from 'react-native';

const ProgressBar = ({ star_rating }) => {
  return (
    <View
      style={{
        width: 100,
        height: 10,
        backgroundColor: 'tomato',
        borderRadius: 5,
        marginRight: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          width: Math.abs(10*star_rating),
          height: 10,
          backgroundColor: 'lightgreen',
          borderRadius: 5,
        }}></View>
    </View>
  );
};

export default ProgressBar;