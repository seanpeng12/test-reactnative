import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from '../styles';
import { Alert, Button } from "react-native";
import axios from 'axios';
// post
import PersonAdd from './personAdd';
import {axios_config, url} from './config';

export default function PersonList() {

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text>{index}   </Text>
      <Text>{item.fields.Name} </Text>
      <Text>{item.fields.City} </Text>
      <Text>{item.fields.Age}歲</Text>
    </View>
  );
  const [persons, setPersons] = useState([]);
  //post用 
  const [modalVisible, setModalVisible] = useState(false);

  async function fetchData () {
      const result = await axios.get(url,axios_config);
      //console.log(result);
      setPersons(result.data.records);
  }

  useEffect(() => {
    fetchData();
  },[modalVisible]);
  
  //收到reload 
  function update(){
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={persons} 
        renderItem = {renderItem}
        keyExtractor={(item, index) => ""+index}
      >
      </FlatList>
      <Button title={"重新整理"} onPress={() => fetchData()} />
      <Button title={"新增"} onPress={()=>setModalVisible(true)} />
      <PersonAdd modalVisible = {modalVisible}  update={update}/>
    </View>
 );

}