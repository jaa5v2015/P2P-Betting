import {View, Text, Button } from 'react-native'
import Login from './Login';
const Home = ({navigation}) =>{
    
   

    return(
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <Text>Home Page</Text>

            <Button title="Login" onPress={()=> navigation.navigate('Login')}/>
            
        </View>
    )
}

export default Home;