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
        navigation.navigate('Login', {loggedIn: false})
        props.renderLogin(false)
    }


    
    if(props.loggedIn == false){
        return(
            <View style={{display:'none'}}>
                
            </View>
        )
    }


    else{
        return (
            <View style={{margin:10, display:'flex', flexDirection:'row', height:'10%', justifyContent:'space-between', alignItems:'center'}}>
                <Icon type='font-awesome' onPress={()=> navigation.navigate('Home')}  size={40} name='home'/>
                <Icon type='font-awesome' size={40} name='plus'/>
                <ModalComponent loggedIn={props.loggedIn} renderLogin={logout} />
                
                <Icon type='font-awesome' size={40} name='bell'/>
                <Icon type='font-awesome' size={40} name='search'/>
                

            </View>
        )
    }


}

export default Navbar;