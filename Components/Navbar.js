import {View, Text, Button} from 'react-native'
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import ModalComponent from './Modal';
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
                <Icon onPress={()=> navigation.navigate('Home')}  size={60} type='evilicon' name='arrow-left'/>
                <ModalComponent loggedIn={props.loggedIn} renderLogin={login} />
                
                <Icon color="blue" onPress={login} size={40} name="login"/>
            </View>
        )
    }


    else{
        return (
            <View style={{margin:10, display:'flex', flexDirection:'row', height:'10%', justifyContent:'space-between', alignItems:'center'}}>
                <Icon onPress={()=> navigation.navigate('Home')}  size={60} type='evilicon' name='arrow-left'/>
                
                <ModalComponent loggedIn={props.loggedIn} renderLogin={logout} />
                <Icon color="red" name="login" size={40} onPress={()=> logout()}/>
            </View>
        )
    }


}

export default Navbar;