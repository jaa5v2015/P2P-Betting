
import {View, Text} from 'react-native'
import Post from './Post';
const Feed = (props) =>{
    return(
        <View>
            {
                props.posts.map(post =>{
                    return(<Post post={post} />)
                    
                })
            }
            
        </View>
    )
}

export default Feed;