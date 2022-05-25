import {View, Text, TextInput, SafeAreaView, StyleSheet, Button} from 'react-native';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const CreateAccount = (route) =>{
    const navigation= useNavigation()
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    
   const createAccount = ( username, password, name) =>{
    
    let data = {
        username: username,
        password: password,
        followers: [ ],
        info: {
            bio: " ",
            profilePic: " ",
            name: name
        },
        following: [ ],
        posts: [ ]
    }
    axios.post('http://10.0.2.2:5000/users', data)


    navigation.navigate('Login', {newAccount: false})

   }
    return(
        <View style={[styles.shadow,{display:'flex', flexDirection:'column', padding:'12%', padding: 10, margin:10, paddingTop:30,}]} >
            
                
                <TextInput style={styles.input} title="Username" onChangeText={(text) => setUser(text)} />
                <TextInput style={styles.input} onChangeText={(text) => setPassword(text)}/>
                <TextInput style={styles.input} title="Name" onChangeText={(text) => setName(text)} />
                

                <Button title='Create Account' onPress={() => createAccount(username, password, name)}/>
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

export default CreateAccount;