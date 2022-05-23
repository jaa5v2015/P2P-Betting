import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View  } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Account from './Screens/Account';
import Navbar from './Components/Navbar';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      loggedIn: false,
      account: [],
      data: []
    }
  }

  renderLogin(bool, account){
    this.setState({loggedIn: bool})
    this.setState({account: account})

  }

  componentDidMount(){
    this.getComment()
  }

  async getComment(){
    await fetch("http://10.0.2.2:3000/profile")
    .then(res => res.json())
    .catch(error => console.error("Error", error))
    .then(res => this.setState({data : JSON.stringify(res)}) )
  }

  render(){
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
       
        <Stack.Screen name='Home'  component={Home}
         initialParams={{
           loggedIn: loggedIn, 
           account: account,
           }}/>
         
        <Stack.Screen name='Login' component={Login} initialParams={{renderLogin:renderLogin, data: data}} />
        <Stack.Screen name='Account' component={Account} initialParams={{account: account}} />
      </Stack.Navigator>
         
      <Navbar loggedIn={loggedIn} renderLogin={renderLogin}/>
    </NavigationContainer>
  }

}