import {View, Text, TextInput, SafeAreaView, StyleSheet, Button} from 'react-native';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Login from '../Screens/Login';

const LoginBox = () =>{
    const navigation= useNavigation()
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')


    //CREATE LOGIN FUNCTION  
   
    return(
        <View style={{display:'flex', flexDirection:'column', padding:'12%', borderWidth:1, padding: 10, margin:10, paddingTop:30, shadowColor:'black' }} >
            
            
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <Button title='Login' onPress={() => navigation.goBack()}/>
            
        
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