import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';

// Using the operating system preferences(iOS13 up)
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
// NavigationContainer, theme
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// Stack
import { createStackNavigator} from '@react-navigation/stack';
// Tab 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// drawer
import { createDrawerNavigator } from '@react-navigation/drawer';


// 引入home
import Home from './src/product/Home'
// 引入test
import Test from './src/product/Test'
// 引入productList
import ProductList from './src/product/ProductList'
// 引入click
import Click from './src/Click';


function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text>歡迎使用</Text>
      <Home/>
      {/* <Button
        title="點此"
        onPress={() => navigation.navigate('詳細資訊')}
      /> */}
    </View>
  );

}

function DetailsScreen() {

  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>此為測試頁</Text>
    //   {/* <Button
    //     title="回到主頁面"
    //     onPress={() => navigation.navigate('家')}
    //   /> */}
    // </View>
    <View style={styles.container}>
      <Test/>
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
// stack頁面:home,details
function home({navigation}){
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        點按進入
      </Text>
      <Button 
        onPress={() => navigation.navigate("主畫面")}
        title="開始使用"
      />
    </View>
  );
}
function Details(){
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        本頁為tabA 細節
      </Text>
    </View>
  );
}
function AppStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="謎燈遊戲" component={home} />
      <Stack.Screen name="主畫面" component={AppTab} />
    </Stack.Navigator>
    
  );
}
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppTab() {
  return (
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
  );
}

function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={AppStack} />
        <Drawer.Screen name="其他功能" component={AppTab} />
      </Drawer.Navigator>
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

