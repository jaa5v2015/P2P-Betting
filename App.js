import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name='Home'  component={Home}/>

        <Stack.Screen name='Login' component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


