
import {View, Text} from 'react-native'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post';
const Feed = (props) =>{

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData()
    }, [])


    const  fetchData = async () => {
        

         const res = await axios.get('http://10.0.2.2:5000/posts')

         setData(res.data)
         
         
      }


    return(
        <View>
            {
                data.map(post =>{
                    return(<Post post={post} />)
                    
                })
            }
            
        </View>
    )
}

export default Feed;