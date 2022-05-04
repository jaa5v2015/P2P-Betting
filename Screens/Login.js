import {View, Text, Button} from 'react-native';
import { useState, useEffect } from 'react';
import LoginBox from '../Components/LoginBox';
const Login = ({navigation}) =>{
    
  

    return(
        <View style={{flexDirection:"column", alignItems:'center', flex: 0.7, justifyContent:'center'}}>
            <LoginBox />

            <Button title="Create account"/>
        </View>
    )
}

export default Login;