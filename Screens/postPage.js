import {View, Text, TextInput, Button} from 'react-native'
import {useState, useEffect} from 'react'
import { Divider } from 'react-native-elements';
import styles from '../Style/styles'
import { useNavigation } from '@react-navigation/native';
import axios  from 'axios';
const PostPage = ({route}) =>{
    const [text, setText] = useState('')    
    const [type, setType] = useState('Post')
    const [update, setUpdate] = useState(false)
    const navigation = useNavigation()


    useEffect(() =>{
        console.log('Updating')
    }, [update])

    function post(text){
        const data = {
            text: text,
            sender: route.params.account.info.name,
            username: route.params.account.username,
            type: type,
        }
        axios.post('http://10.0.2.2:5000/posts', data)
        setUpdate(!update)
        navigation.navigate('Home')
        
    }

    function cancel(){
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginBottom:'2%'}}>
                <Button title="Cancel" onPress={()=> cancel()}/>
                <Button title="Post" onPress={() => post(text)}/>

                
            </View>


            <View style={{width: "90%",  marginTop:"5%", marginLeft:'3%'}}>
                <Divider />
                <TextInput multiline={true} onChangeText={(text) => setText(text)}/>
                <Divider />
            </View>


            
            
            
        </View>
    )
}

export default PostPage;