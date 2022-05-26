import {View, Text, Button} from 'react-native';
import { useState, useEffect } from 'react';
import LoginBox from '../Components/LoginBox';
import CreateAccount from '../Components/createAccount';
import axios from "axios"
const Login = ({route}) =>{
    
    const [newAccount, makeAccount] = useState(route.params.newAccount)
    const [data, setData] = useState([])
   
    function createAccount(){
        makeAccount(!route.params.newAccount)
        console.log(route.paramas)
    }

    useEffect(()=>{
        fetchData()
    }, [route.params.newAccount])


    const  fetchData = async () => {
        

         const res = await axios.get('http://10.0.2.2:5000/users')

         setData(res.data)
         
         
      }
    if(newAccount == false){
        return(
            <View style={{flexDirection:"column", alignItems:'center', flex: 0.7, justifyContent:'center'}}>
                <LoginBox renderLogin={route.params.renderLogin} data={data} />
              
                <Button title="Create account" onPress={() => createAccount()}/>
            </View>
        )
    }
    else{
        return(
            <View style={{flexDirection:"column", alignItems:'center', flex: 0.7, justifyContent:'center'}}>
              
                <CreateAccount renderLogin={route.params.renderLogin}/>
                <Button  title="Login" onPress={() => makeAccount(false)}/>
            </View>
        )
    }
}

export default Login;