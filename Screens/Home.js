import {View, Text, Button } from 'react-native'
import { useEffect } from 'react/cjs/react.production.min';
import Login from './Login';
const Home = ({navigation, route}) =>{
    
   if(route.params.loggedIn == false){
    return(
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <View>
                <Text>Home</Text>
            </View>
            
            <Button  title="Login" onPress={()=> navigation.navigate('Login', {loggedIn: route.params.loggedIn})}/>
            
        </View>
    )
   }
   else{
       return(
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <View>
            <Text>Logged in Home</Text>
            
        </View>
        
        <Button  title="Login" onPress={()=> navigation.navigate('Login')}/>
        
    </View>
       )
   }
}

export default Home;