import {View, Text, TextInput, SafeAreaView, StyleSheet, Button, Alert} from 'react-native';
import {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const LoginBox = (props) =>{
    const navigation= useNavigation()
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [accountId, setAccountId] = useState([])
    const [acc, setAccount] = useState([])
    //CREATE LOGIN FUNCTION  
   const login = (username, password) =>{
       var loggedIn = false
     
       
       props.data.map(
           account=>{
               
               if(account.username == username & account.password == password){
                   
                    setAccountId(account.id)
                    setAccount(axios.get(`http://10.0.2.2:5000/users/${accountId}`))
                    navigation.navigate('Account',{loggedIn: true, account:account})
                    props.renderLogin(true, account)
                    loggedIn = true
               } 
           }
           
       )
       if(loggedIn == false){
        Alert.alert(
            "Alert",
            "Incorrect Login",
            [
                {
                    text: 'Try again',
                   
                    stlye: 'cancel'
                },
            ]
        )
       }
    
      
           
   }

  

    return(
        <View style={[styles.shadow,{display:'flex', flexDirection:'column', padding:'12%', padding: 10, margin:10, paddingTop:30,}]} >
                <TextInput style={styles.input} title="Username" onChangeText={(text) => setUser(text)} />
                <TextInput style={styles.input} onChangeText={(text) => setPassword(text)}/>
                <Button title='Login' onPress={() => login(username, password)}/>
               
           

               
        
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 300,
        padding: 10,
        margin: 10
    },
    shadow:{
    borderColor:'black', // if you need 
      borderWidth: 1,
      overflow: 'hidden',
      shadowColor: 'grey',
      shadowRadius: 10,
      shadowOpacity: 1,
    }
})

export default LoginBox;