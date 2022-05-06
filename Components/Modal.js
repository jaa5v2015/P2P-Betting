import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button} from "react-native";
import {Icon} from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";
import Account from "../Screens/Account";
const ModalComponent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()

function moveTo(){
    props.renderLogin()
    setModalVisible(!modalVisible)
    
}

function moveAccount(){
    navigation.navigate('Account')
    setModalVisible(false)
}


    
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
          <Button style={[styles.button, styles.buttonClose]} onPress={() => moveAccount()} title="Account"/>

            {
                props.loggedIn ? 
            
                <Button style={[styles.button, styles.buttonClose]} onPress={() => moveTo()} title="Logout"/>

                :
                
                <Button style={[styles.button, styles.buttonClose]} onPress={() => moveTo()} title="Login"/>
                    
            }

          </View>
        </View>
      </Modal>
      
          <Icon onPress={()=> setModalVisible(true)} size={60} type='evilicon' name='user'/>
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    display: 'flex',
    margin: 20,
    backgroundColor: "white",
    justifyContent:'space-between',
    borderRadius: 20,
    padding: 35,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalComponent;