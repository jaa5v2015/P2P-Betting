import {View, Text, Button } from 'react-native'
import { useEffect } from 'react/cjs/react.production.min';
import Feed from '../Components/Feed';
const Home = ({navigation, route}) =>{
    

   if(route.params.loggedIn == false){
    return(
        
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            
            <View>
                <Text>Home</Text>
                
                
            </View>
            
      
            
        </View>
    )
   }
   else{
       return(
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <View>


            <Feed/>
         
        </View>
       
        
    </View>
       )
   }
}

export default Home;