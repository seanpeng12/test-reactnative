import React, {useState} from 'react';
import { Alert } from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native';

import ProductAdd from './ProductAdd';
import styles from '../styles';

// 資料本身
// const data =[
//     {name:"Prim", price:5000},
//     {name:"Dijkstra", price:10000},
//     {name:"Floyd-warshall", price:32000}
// ]

export default function ProductList(){
    // useState
    const [selected, setSelected] = useState(null);

    // form 資料
    const [products, setProducts] = useState([
        {desc:"Prim", price:5000},
        {desc:"Dijkstra", price:10000},
        {desc:"Floyd-warshall", price:32000}
    ]);

    // modal
    const [modalVisible, setModalVisible] = useState(false);

    // 定義每筆資料(內容,css....)
    const renderItem = ({ item, index }) => {
        const backgroundColor = index === selected ? "#f9c2ff" : "#00ffff";
        return(
            <TouchableOpacity onPress = {()=>{Alert.alert("您點選了:"+item.desc),setSelected(index)}} style={[styles.item, {backgroundColor}]}>
            <Text style={styles.title}>{item.desc}</Text>
            <Text>{item.price}</Text>
            <Text>/{index}</Text>
            </TouchableOpacity>
        );
    }

    function updatedata(newProduct){
        // 加入到串列尾
        setProducts(oldProducts=>[...oldProducts, newProduct]);
      }

    // export回傳
    return (
        <View style={styles.row}>
        <FlatList style={styles.listContainer}
            data={products} 
            renderItem = {renderItem}
            keyExtractor={item => item.desc}>
        </FlatList>
        <ProductAdd 
            style={styles.formContainer}    
            updateInAdd={updatedata}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}/>
        </View>
      );
};


// const app = StyleSheet.create({
//     c: {
//       flex: 1,
//       flexDirection: "column",
//     },
//   });



  
