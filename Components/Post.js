
import {View, Text, ProgressViewIOS} from 'react-native'
import styles from '../Style/styles'
const Post = (props) =>{
    
    return(
     <View style={styles.post}>

         <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
            <Text>{props.post.sender}</Text>
            <Text style={{paddingLeft: 10}}>@{props.post.username}</Text>
         </View>
         <View>
             <Text>{props.post.text}</Text>
         </View>

     </View>

    )
}

export default Post;