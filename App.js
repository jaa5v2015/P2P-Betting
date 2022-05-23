import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View  } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Account from './Screens/Account';
import Navbar from './Components/Navbar';
import PostPage from './Screens/postPage';
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

  renderLogin = (bool, account)=>{
    
    this.setState({loggedIn: bool})
    this.setState({account: account})
    
  }


 




  render(){
    return(
      <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
       
        <Stack.Screen name='Home'  component={Home}
         initialParams={{
           loggedIn: this.state.loggedIn, 
           account: this.state.account,
           }}/>
        <Stack.Screen name="Post" component={PostPage} initialParams={{account: this.state.account}}/>
        <Stack.Screen name='Login' component={Login} initialParams={{renderLogin:this.renderLogin}} />
        <Stack.Screen name='Account' component={Account} initialParams={{account: this.state.account}} />
      </Stack.Navigator>
        
      <Navbar loggedIn={this.state.loggedIn} renderLogin={this.renderLogin}/>
    </NavigationContainer>
    )
  }

}