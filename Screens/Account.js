import { useNavigation } from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import { useEffect } from 'react';
import styles from '../Style/styles'
import Feed from '../Components/Feed';
import axios from 'axios'
const Account = ({route}, prop) =>{
 
    useEffect(async ()=>{
        fetchApi()
      }, [])
    
      const fetchApi = async () =>{
        const res = await axios.get('http://10.170.139.191:3000/profile')
        console.log(res.data)
      }


    return(
        <View style={styles.container}>

            <View style={styles.info}>
                <Text> {route.params.account.info.name}</Text>
                <Text style={{paddingBottom:5}}> @{route.params.account.username}</Text>
                <Text stlye={{paddingBottom: 0}}>{route.params.account.info.bio} </Text>
                <View style={styles.followers}>
                    <Text>{route.params.account.followers.length} Followers</Text>
                    <Text>{route.params.account.following.length} Following</Text>
                    <Text>Team: {route.params.account.info.favTeam}</Text>

                </View>

            </View>

             <View>
                <Feed posts={route.params.account.posts}/>
             </View>
        </View>
        
    )
}

export default Account;