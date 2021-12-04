/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './src/screens/Splash';
import Booking from './src/screens/Booking';
import Payment from './src/screens/Payment';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import CarDetails from './src/screens/CarDetails';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CarDetails);
