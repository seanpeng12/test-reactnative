import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// icon
import { Ionicons } from '@expo/vector-icons';


import { StatusBar } from 'expo-status-bar';
import {useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';

// 引入click
import Click from './src/Click';
// 引入
import ProductList from './src/product/ProductList'



function HomeScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>歡迎使用</Text>
      {/* <Button
        title="點此"
        onPress={() => navigation.navigate('詳細資訊')}
      /> */}
    </View>
  );

}

function DetailsScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>此為測試頁</Text>
      {/* <Button
        title="回到主頁面"
        onPress={() => navigation.navigate('家')}
      /> */}
    </View>
  );
}


function Product(){
  return(
    <View style={styles.container}>
      <ProductList/>
    </View>
  )
}

function Clicktest({route}){
  // 使用state
  const [num, setNum] = useState(route.params.count);

  // props單獨傳值給clickjs是無法用useEffect監控(並非共用變數不會更新)，需要傳送function props
  function updateNum(newNumber){
    setNum(newNumber);
  }
  return(
    <View style={styles.container}>
      <Text>歡迎使用</Text>
       <Click number={num} update={updateNum}/>
      <StatusBar style="auto" />
    </View>
  )
}

const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === '家') {
              iconName = focused ? 'ios-home' : 'ios-albums';
            } else if (route.name === '詳細資訊') {
              iconName = focused ? 'ios-list-box' : 'ios-list-box';
            }else if(route.name === '新增商品') {
              iconName = focused ? 'ios-arrow-down' : 'ios-arrow-up';
            }else if(route.name === 'Click測試') {
              iconName = focused ? 'ios-add' : 'ios-add';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="家" component={HomeScreen} />
        <Tab.Screen name="詳細資訊" component={DetailsScreen} />
        <Tab.Screen name="新增商品" component={Product} />
        <Tab.Screen name="Click測試" component={Clicktest} initialParams={{ count: 10 }}/>
      </Tab.Navigator>
    </NavigationContainer>
 
  );
}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

