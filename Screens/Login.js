import {View, Text, Button} from 'react-native';
import LoginBox from '../Components/LoginBox';
const Login = ({navigation}) =>{

    //CREATE LOGIN FUNCTION

    return(
        <View style={{flexDirection:"column", alignItems:'center', flex: 0.5, justifyContent:'center'}}>
            <LoginBox/>
        </View>
    )
}

export default Login;