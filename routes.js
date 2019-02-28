import React,{Component} from 'react';
import {createDrawerNavigator,createStackNavigator} from 'react-navigation';


import Home from './components/home';
import BloodRequestList from './components/bloodrequestlist';
import BloodRequest from './components/bloodrequest';
import BloodRequestForm from './components/bloodrequestform';
let stack = createStackNavigator({
  BloodRequestList:{
    screen:BloodRequestList,
  },
  BloodRequest:{
    screen:BloodRequest,
  }
  
},
{
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }

);

export default createDrawerNavigator({
  Home: {
    screen: Home,
  },
  BloodRequests:{
    screen:stack,
  }, 
  'Request Blood Form':{
    screen: BloodRequestForm,
  }

  
},{ navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }});
 


