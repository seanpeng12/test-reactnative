import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
// 引入click
import Click from './src/Click';

export default function App() {
  const [count] = useState(10);

  useEffect(()=>{
    Alert.alert("count in App:"+count);}
  );
  return (
    <View style={styles.container}>
      <Text>歡迎使用~</Text>
      <Click count={count}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
