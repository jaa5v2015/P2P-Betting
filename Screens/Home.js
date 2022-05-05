import {View, Text, Button } from 'react-native'
import { useEffect } from 'react/cjs/react.production.min';
import Feed from '../Components/Feed';
import Login from './Login';
const Home = ({navigation, route}) =>{
    
    const logout = () =>{
        route.params.setLogin()
    }


   if(route.params.loggedIn == false){
    return(
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <View>
                <Text>Home</Text>
            </View>
            
            <Button  title="Login" onPress={()=> navigation.navigate('Login', {
                params:{bool: route.params.loggedIn}
            })}/>
            
        </View>
    )
   }
   else{
       return(
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <View>


            <Feed></Feed>
         
        </View>
        
        <Button  title="Logout" onPress={()=> navigation.navigate('Home',{loggedIn: false})}/>
        
    </View>
       )
   }
}

export default Home;