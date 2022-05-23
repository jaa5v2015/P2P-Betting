import {View, Text, Button, ScrollView } from 'react-native'
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

            <ScrollView>
                <Feed/>
            </ScrollView>
         
        </View>
       
        
    </View>
       )
   }
}

export default Home;