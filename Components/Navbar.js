import {View, Text, Button} from 'react-native'
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
const Navbar = (props) =>{
    const navigation = useNavigation()

    function login(){
        navigation.navigate('Login')
        
    }

    function logout(){
        navigation.navigate('Home', {loggedIn: false})
        props.renderLogin(false)
    }


    if(props.loggedIn == false){
        return(
            <View style={{margin:10, display:'flex', flexDirection:'row', height:'10%', justifyContent:'space-between', alignItems:'center'}}>
                <Icon onPress={()=> navigation.goBack()}  size={60} type='evilicon' name='arrow-left'/>
                <Icon onPress={()=> navigation.navigate('Account')} size={60} type='evilicon' name='user'/>
                <Button  title="Login" onPress={()=> login()}/>
            </View>
        )
    }


    else{
        return (
            <View style={{margin:10, display:'flex', flexDirection:'row', height:'10%', justifyContent:'space-between', alignItems:'center'}}>
                <Icon onPress={()=> navigation.goBack()}  size={60} type='evilicon' name='arrow-left'/>
                <Icon onPress={()=> navigation.navigate('Account')} size={60} type='evilicon' name='user'/>
                <Button  title="Logout" onPress={()=> logout()}/>
            </View>
        )
    }


}

export default Navbar;