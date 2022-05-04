import {View, Text, TextInput, SafeAreaView, StyleSheet, Button} from 'react-native';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Login from '../Screens/Login';

const LoginBox = (route) =>{
    const navigation= useNavigation()
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')


    //CREATE LOGIN FUNCTION  
   const login = (username, password) =>{
       console.log(username)
       console.log(password)
       navigation.navigate('Home',{loggedIn: true, account: username})
   }
    return(
        <View style={[styles.shadow,{display:'flex', flexDirection:'column', padding:'12%', padding: 10, margin:10, paddingTop:30,}]} >
            
            
                <TextInput style={styles.input} title="Username" onChangeText={(text) => setUser(text)} />
                <TextInput style={styles.input} onChangeText={(text) => setPassword(text)}/>
                <Button title='Login' onPress={() => login(username, password)}/>
                <View class='divider'/>
                
        
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