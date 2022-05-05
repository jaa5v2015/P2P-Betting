import {View, Text, Button} from 'react-native';
import { useState, useEffect } from 'react';
import LoginBox from '../Components/LoginBox';
import CreateAccount from '../Components/createAccount';
const Login = ({navigation, route}) =>{
    
    const [newAccount, makeAccount] = useState(false)
 
    function createAccount(){
        makeAccount(true)
    }

    if(newAccount == false){
        return(
            <View style={{flexDirection:"column", alignItems:'center', flex: 0.7, justifyContent:'center'}}>
                <LoginBox renderLogin={route.params.renderLogin} />
                
                <Button title="Create account" onPress={() => createAccount()}/>
            </View>
        )
    }
    else{
        return(
            <View style={{flexDirection:"column", alignItems:'center', flex: 0.7, justifyContent:'center'}}>
                {console.log(route)}
                <CreateAccount renderLogin={route.params.renderLogin}/>
                <Button  title="Create account"/>
            </View>
        )
    }
}

export default Login;