import React, {useState} from 'react';
import { Alert } from 'react-native';
import { Button , TextInput, View } from 'react-native';



export default function ProductAdd(props){
    // useState
    const [desc ,setDesc] = useState("");
    const [ price, setPrice] = useState('');

    function update(){
        props.updateInAdd({desc,price});
    }

    return (
        <View>
        <TextInput placeholder="產品說明" value={desc} onChangeText={text=>setDesc(text)}/>
        <TextInput placeholder="價格" value={price} onChangeText={text=>setPrice(text)}/>
        <Button onPress={update} title="新增"/>
        </View>
      );
};



