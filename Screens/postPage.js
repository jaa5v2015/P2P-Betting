import {View, Text, TextInput} from 'react-native'

import styles from '../Style/styles'
const PostPage = () =>{
    

    return(
        <View style={styles.container}>
            <View style={styles.info}>
                <Text>PostPage</Text>
            
            </View>

            <View style={{width: "90%", padding: '10px', borderColor: "black"}}>
                <TextInput/>
            </View>
            
            
        </View>
    )
}

export default PostPage;