import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  container: {
    padding: 10,
  
    justifyContent:'space-between',
    marginTop: 30,
    width: '100%'
  },
    info:{
       borderWidth:1,
        flexDirection:'column',
        padding: 10,
        color: '#657786',
    },
    followers:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    post:{
        display:'flex',
        flexDirection:'column',
        marginTop:20,
        padding:10,
       
        

    },
    modalButton:{
        paddingBottom: 10
    }
});