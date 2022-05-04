import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View  } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
const Stack = createNativeStackNavigator();

export default function App() {
  
  const [loggedIn, setLogin] = useState(false)

  const logout = () =>{
    setLogin(false)
  } 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {console.log(loggedIn)}
        <Stack.Screen name='Home'  component={Home}
         initialParams={{
           loggedIn: loggedIn, 
           account: "",
           
           
           }}/>

        <Stack.Screen name='Login' component={Login} />

      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}


