import {View, Text, Button, ScrollView } from 'react-native'
import { useEffect } from 'react/cjs/react.production.min';
import Feed from '../Components/Feed';

const Home = ({navigation, route}) =>{
    
console.log(route.params)
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
        <View style="style.container">
        

            <ScrollView style="style.container">
                <Feed/>
            </ScrollView>
         
        
       
        
    </View>
       )
   }
}

export default Home;