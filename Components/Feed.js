
import {View, Text} from 'react-native'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post';
import { Divider } from 'react-native-elements';
const Feed = (props) =>{

    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(false)
    useEffect(()=>{
        fetchData()
       
    }, [])


    const  fetchData = async () => {
         const res = await axios.get('http://10.0.2.2:5000/posts')
         setData(res.data.reverse())
         setUpdate(!update)
      }


    return(
        <View>
            {
                data.map(post =>{
                    return(
                        
                        <Divider>
                        <Post post={post} />

                        </Divider>
                    
                    )
                    
                })
            }
            
        </View>
    )
}

export default Feed;