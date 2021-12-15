import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import CarDetails from './src/screens/CarDetails';
import Contact from './src/screens/Contact';
import TabNavigation from './src/screens/navigation';
import Payment from './src/screens/Payment';
import Search from './src/screens/Searchscreen';
import Booking from './src/screens/Booking';
import Tabs from './src/screens/bottomTabNavigations';
import Feedback from './src/screens/Feedback';

const Stack = createStackNavigator();
function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Booking">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
          name="CarDetails"
          component={CarDetails}
          options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
          name="navigation"
          component={TabNavigation}
          options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
          name="Searchscreen"
          component={Search}
          options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
          name="Booking"
          component={Booking}
          options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
          name="bottomTabNavigations"
          component={Tabs}
          options={{headerShown: false}}></Stack.Screen>
          
          {/* <Stack.Screen
          name="Contact"
          component={Contact}
          options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{headerShown: false}}></Stack.Screen> */}
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
