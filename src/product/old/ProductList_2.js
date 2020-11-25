import React, {useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native';

// 資料本身
const data =[
    {name:"商品一", price:5000},
    {name:"商品二", price:10000},
]

export default function ProductList(){
    // useState
    const [selected, setSelected] = useState(null);

    // 一筆資料的定義
    const renderItem = ({ item, index }) => {
        const backgroundColor = index === selected ? "#f9c2ff" : "#00ffff";
        return(
            <TouchableOpacity onPress = {()=>{Alert.alert("您點選了:"+item.name),setSelected(index)}} style={[styles.item, {backgroundColor}]}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.content}>{item.price}</Text>
            <Text style={styles.content}>/{index}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
        <FlatList 
            data={data} 
            renderItem = {renderItem}
            keyExtractor={item => item.name}>
        </FlatList>
        </View>
      );
};

// css部分
const styles = StyleSheet.create({

    container: {
      //backgroundColor: '#00bfff',
      flex: 1,
      flexDirection: 'row',
      marginTop: StatusBar.currentHeight || 0,
    },
  
    item: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#DDDDDD",
      padding: 12,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  
    title: {
        flex: 4,
        fontSize: 24,
    },

    content: {
    flex: 1,
    },

  
  });