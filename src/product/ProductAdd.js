import React, {useState} from 'react';
import { Alert,Modal,StatusBar, StyleSheet } from 'react-native';
import { Button , TextInput, View } from 'react-native';
import styles from '../styles';


export default function ProductAdd(props){
    // useState
    const [desc ,setDesc] = useState("");
    const [ price, setPrice] = useState('');

    function update(){
        props.updateInAdd({desc,price});  
        props.setModalVisible(false);
    }

    function visable(){
        props.setModalVisible(true);
    }


    

    return (
        <View>
        <Modal  visible={props.modalVisible}>
        <TextInput style={styles.index} placeholder="產品說明" value={desc} onChangeText={text=>setDesc(text)}/>
        <TextInput style={styles.index} placeholder="價格" value={price} onChangeText={text=>setPrice(text)}/>
        <Button onPress={update} title="確定"/>
        </Modal>
        <Button onPress={visable} title="新增"/>
        {/* <TextInput style={styles.index} placeholder="產品說明" value={desc} onChangeText={text=>setDesc(text)}/>
        <TextInput style={styles.index} placeholder="價格" value={price} onChangeText={text=>setPrice(text)}/>
        <Button onPress={update} title="新增"/> */}
        </View>
      );
};


