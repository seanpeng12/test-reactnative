import React, { useState, useEffect } from "react";
import { FlatList, View, Text, TouchableOpacity, LogBox } from "react-native";
import { Icon, Fab } from "native-base";
import styles from "../styles";
import { Alert, Button } from "react-native";
import axios from "axios";

import * as firebase from "firebase";
import firestore from "firebase/firestore";
import ProductAdd from "../product/ProductAdd";
import { config } from "./firebase_config";

export default function firebaseList() {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const [fdata, setData] = useState([{ desc: "初始值", price: "初始值" }]);
  const [isLoading, setIsLoading] = useState(true);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.item]}>
        <Text style={styles.title}>{item.desc}</Text>
        <Text>{item.price}</Text>
        <Text>/{index}</Text>
      </TouchableOpacity>
    );
  };
  async function firebaseGet() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    const db = firebase.firestore();
    try {
      const newProducts = [];
      const querySnapshot = await db.collection("測試資料").get();

      querySnapshot.forEach((doc) => {
        // console.log(doc.id);
        // console.log(doc.data().姓名);
        // console.log(doc.data().電話);
        const newProduct = {
          desc: doc.data().姓名,
          price: doc.data().電話,
        };
        newProducts.push(newProduct);
        //console.log(newProduct);
      });
      setData(newProducts);
      setIsLoading(false);
      console.log(newProducts);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    console.log("length:" + fdata.length);
    firebaseGet();
  }, [isLoading]);

  // modal
  const [modalVisible, setModalVisible] = useState(false);

  function updatedata(newProduct) {
    // 加入到串列尾
    setData((oldProducts) => [...oldProducts, newProduct]);
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={fdata}
        renderItem={renderItem}
        keyExtractor={(item, index) => "" + index}
      ></FlatList>
      <ProductAdd
        style={styles.formContainer}
        // setProducts props
        updateInAdd={updatedata}
        // model參數值props
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
