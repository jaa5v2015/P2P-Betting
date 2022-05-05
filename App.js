import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View  } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Account from './Screens/Account';
import Navbar from './Components/Navbar';
import { render } from 'react-dom';
const Stack = createNativeStackNavigator();

export default function App() {
  
  const [loggedIn, setLogin] = useState(false)

  function renderLogin(bool){
    setLogin(bool)
  }

  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        
        <Stack.Screen name='Home'  component={Home}
         initialParams={{
           loggedIn: loggedIn, 
           account: '',
           }}/>

        <Stack.Screen name='Login' component={Login} initialParams={{renderLogin:renderLogin}} />
        <Stack.Screen name='Account' component={Account}/>
      </Stack.Navigator>
      <Navbar loggedIn={loggedIn} renderLogin={renderLogin}/>
    </NavigationContainer>
  );
}


