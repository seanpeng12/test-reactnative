import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { Container, Header, View, Button, Icon, Fab } from "native-base";
import styles from "../styles";
import { Alert } from "react-native";
import axios from "axios";

import PersonAdd from "./personAdd";
import { axios_config, url } from "./config";

export default function PersonList() {
  const [persons, setPersons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  async function fetchData() {
    const result = await axios.get(url, axios_config);
    console.log("重整中........");
    if (result.length != 0) {
      console.log("airtable get!");
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
        <View style={{ flex: 1, flexDirection: "row" }}></View>
      </View>
    </View>
  );

  const [state, setState] = useState(false);
  return (
    <Container>
      <Header />
      <View>
        <View>
          <FlatList
            style={{ width: 400 }}
            data={persons}
            renderItem={renderItem}
            keyExtractor={(item, index) => "" + index}
          ></FlatList>
          <Button title={"reload"} onPress={() => fetchData()} />
          <PersonAdd modalVisible={modalVisible} update={update} />
          <Fab
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={() => setModalVisible(true)}
          >
            <Icon ios="ios-add" android="md-add" />
          </Fab>
        </View>
      </View>
    </Container>
  );
}
