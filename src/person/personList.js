import React, { useState, useEffect } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Icon, Fab } from "native-base";
import styles from "../styles";
import { Alert, Button } from "react-native";
import axios from "axios";

import PersonAdd from "./personAdd";
import { axios_config, url } from "./config";

export default function PersonList() {
  const renderItem = ({ item, index }) => (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <View style={{ height: 50, backgroundColor: "powderblue" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text>{index} </Text>
          <Text>{item.fields.Name} </Text>
          <Text>{item.fields.City} </Text>
          <Text>{item.fields.Age}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Fab onPress={() => setModalVisible(true)}>
            <Icon ios="ios-add" android="md-add" />
          </Fab>
        </View>
      </View>
    </View>
  );

  const [persons, setPersons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  async function fetchData() {
    const result = await axios.get(url, axios_config);
    console.log("Refresh........");
    if (result.length != 0) {
      console.log("Get data done");
    }
    // console.log(result);
    setPersons(result.data.records);
  }
  // 偵測modalViaible改變refresh data
  useEffect(() => {
    fetchData();
  }, [modalVisible]);

  //收到props
  function update() {
    setModalVisible(false);
  }

  return (
    <View style={{ width: 300 }}>
      <FlatList
        data={persons}
        renderItem={renderItem}
        keyExtractor={(item, index) => "" + index}
      ></FlatList>
      <Button title={"重新整理"} onPress={() => fetchData()} />
      <Button title={"新增"} onPress={() => setModalVisible(true)} />
      <PersonAdd modalVisible={modalVisible} update={update} />
    </View>
  );
}
