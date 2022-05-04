import {View, Text, TextInput, SafeAreaView, StyleSheet, Button} from 'react-native';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Login from '../Screens/Login';

const LoginBox = () =>{
    const navigation= useNavigation()
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')


    //CREATE LOGIN FUNCTION  
   const login = (username, password) =>{
       console.log('Username: ', username)
       console.log("Password: ", password)
       navigation.goBack()
   }
    return(
        <View style={{display:'flex', flexDirection:'column', padding:'12%', borderWidth:1, padding: 10, margin:10, paddingTop:30, shadowColor:'black' }} >
            
            
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
})

export default LoginBox;