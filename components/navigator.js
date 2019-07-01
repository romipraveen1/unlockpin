import React from 'react';
import { Image } from 'react-native';

import Home from '../App';
import searchView from './searchView';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';


const screens = createStackNavigator(
  {
    searchView,
    Home
    
 
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 20 * 3,
        backgroundColor: 'white',
        borderBottomColor: 'transparent',
        elevation: 0 // for android
      },
    //   headerBackImage: (
    //     // <Image source={require('../../assets/icons/back.png')} />
    //   ),
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: 20,
        paddingRight: 20
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: 20
      }
    }
  }
);

export default createAppContainer(screens);