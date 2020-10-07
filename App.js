import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
// 引入click
import Click from './src/Click';
// 引入
import ProductList from './src/product/ProductList'

export default function App() {
  // 使用state
  const [num, setNum] = useState(10);
  // props單獨傳值給clickjs是無法用useEffect監控(並非共用變數不會更新)，需要傳送function props
  function updateNum(newNumber){
    setNum(newNumber);
  }

  return (
    // <View style={styles.container}>
    //   <Text>歡迎使用~</Text>
    //    <Click number={num} update={updateNum}/>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <ProductList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
