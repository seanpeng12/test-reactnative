import React, { useState, useEffect } from "react";
import { Button, TextInput, Modal, View, StyleSheet } from "react-native";
import axios from "axios";
import styles from "../styles";
import { axios_config, url } from "./config";

export default function PersonAdd(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState(0);

  async function sendData() {
    // 要新增的資料格式
    const newPerson = {
      fields: {
        Name: name,
        City: city,
        Age: parseInt(age),
      },
    };
    //console.log(newPerson);
    try {
      const result = await axios.post(url, newPerson, axios_config);
      console.log("以下為post資料");
      console.log(result);

      // 關閉視窗
      props.update();
    } catch (e) {
      console.log("error:" + e);
    }
  }

  function update() {
    sendData();
  }

  return (
    <Modal visible={props.modalVisible}>
      <View style={modal.centeredView}>
        <View style={modal.modalView}>
          <TextInput
            style={styles.index}
            placeholder="姓名"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.index}
            placeholder="城市"
            value={city}
            onChangeText={(text) => setCity(text)}
          />
          <TextInput
            style={styles.index}
            placeholder="年齡"
            value={age.toString()}
            onChangeText={(text) => setAge(text)}
          />
          <Button onPress={update} title="新增" />
          <Button onPress={props.update} title="取消" />
        </View>
      </View>
    </Modal>
  );
}

const modal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
