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
    },
    followers:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    post:{
        display:'flex',
        flexDirection:'column',
        marginTop:30,
        padding:20,
        borderWidth:1,
        borderTopWidth:4
    },
    modalButton:{
        paddingBottom: 10
    }
});