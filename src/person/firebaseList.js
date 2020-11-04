import React, { useState, useEffect } from "react";
import { FlatList, View, Text, TouchableOpacity, YellowBox } from "react-native";
import { Icon, Fab } from "native-base";
import styles from "../styles";
import { Alert, Button } from "react-native";
import axios from "axios";


import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import {config} from './firebase_config';

export default function firebaseList() {
    YellowBox.ignoreWarnings(['Setting a timer']);
    //LogBox.ignoreLogs();
    const [fdata,setData] = useState([{desc:"123",price:"123"}]);
    const [isLoading,setIsLoading] = useState(true);
    const renderItem = ({item,index}) => {
        <View style={styles.item}>
            <Text>{index}</Text>
            <Text style={styles.title}>{item.desc}123</Text>
            <Text>{item.price}</Text>
        </View>
    }
    async function firebaseGet(){
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        const db = firebase.firestore();
        try {
            const newProducts=[];
            const querySnapshot =  await db.collection("測試資料").get();
            
            querySnapshot.forEach((doc) => {
                // console.log(doc.id);
                // console.log(doc.data().姓名);
                // console.log(doc.data().電話);
                const newProduct = {
                    desc:doc.data().姓名,
                    price:doc.data().電話
                }
                newProducts.push(newProduct);
                //console.log(newProduct);
            });
            setData(newProducts);
            setIsLoading(false);
            console.log(newProducts);
        }catch(e){
            console.log(e);
        } 
    }
    useEffect(()=>{
        console.log("length:"+fdata.length);
        //firebaseGet();
    }
    ,[isLoading]);
  return (
    
    <View style={styles.listContainer}>
        <Text style = {styles.item}>哈囉</Text>
        <FlatList 
            data={fdata} 
            renderItem = {renderItem}
            keyExtractor={(item, index) => ""+index}
        ></FlatList>
    </View>
    
  );
}
