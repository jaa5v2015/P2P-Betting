import { StatusBar } from 'expo-status-bar';
import {useEffect, useState} from 'react'
import { StyleSheet, Text, View  } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Account from './Screens/Account';
import Navbar from './Components/Navbar';
import { render } from 'react-dom';
import data from './data';


const Stack = createNativeStackNavigator();

export default function App() {
  
  const [loggedIn, setLogin] = useState(false)
  const [account, setAccount] = useState([])
  
  function renderLogin(bool, account){
    setLogin(bool)
    setAccount(account)
  }

  useEffect(async ()=>{
    let res = await fetch('http://localhost:3000/profile')

    console.log(res)
  })

 
  return (
    
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
  );
}


const styles = StyleSheet.create({
  accountView:{
    display: 'flex'
  }
});

