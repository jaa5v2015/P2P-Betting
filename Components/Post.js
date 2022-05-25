
import {View, Text, ProgressViewIOS} from 'react-native'
import styles from '../Style/styles'
import {Icon } from 'react-native-elements';

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
         <View style={{marginLeft:40, marginRight:40, marginTop:10, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Icon type='font-awesome' size={12} name='comment'/>
            <Icon type='font-awesome' size={12} name='heart' color={"red"}/>
            <Icon type='font-awesome' size={12} name='share'/>

             
         </View>
        
     </View>

    )
}

export default Post;