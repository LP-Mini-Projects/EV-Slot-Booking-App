import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Search from './Searchscreen';
import TabNavigation from './navigation';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  
  return (
    <Tab.Navigator initialRouteName="Profile" activeColor="#fff">
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: 'Contact',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="navigation"
        component={TabNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Contact and Feedback',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="call" color={color} size={26} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};
export default Tabs;
