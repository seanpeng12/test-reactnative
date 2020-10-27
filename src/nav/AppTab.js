import * as React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Alert, StyleSheet } from "react-native";

// 引入home
import Home from "./src/product/listdemo";
// 引入test
import Test from "./src/product/Test";
// 引入productList
import ProductList from "./src/product/ProductList";
// 引入click
import Click from "./src/Click";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>====================</Text>
      <Home />
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Test />
    </View>
  );
}
function Product() {
  return (
    <View style={styles.container}>
      <ProductList />
    </View>
  );
}
function Clicktest({ route }) {
  // 使用state
  const [num, setNum] = useState(route.params.count);

  // props單獨傳值給clickjs是無法用useEffect監控(並非共用變數不會更新)，需要傳送function props
  function updateNum(newNumber) {
    setNum(newNumber);
  }
  return (
    <View style={styles.container}>
      <Text>歡迎使用</Text>
      <Click number={num} update={updateNum} />
      <StatusBar style="auto" />
    </View>
  );
}

// Using the operating system preferences(iOS13 up)
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
// NavigationContainer, theme
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
// Stack
import { createStackNavigator } from "@react-navigation/stack";
// Tab
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// drawer
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Image } from "react-native";
// react-native-elements
import { Card, ListItem, Icon, Button } from "react-native-elements";

// 引入
const Tab = createBottomTabNavigator();

// 四個頁面之Tab
export default function AppTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "家") {
            iconName = focused ? "ios-home" : "ios-albums";
          } else if (route.name === "詳細資訊") {
            iconName = focused ? "ios-list-box" : "ios-list-box";
          } else if (route.name === "新增商品") {
            iconName = focused ? "ios-arrow-down" : "ios-arrow-up";
          } else if (route.name === "Click測試") {
            iconName = focused ? "ios-add" : "ios-add";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="家" component={HomeScreen} />
      <Tab.Screen name="詳細資訊" component={DetailsScreen} />
      <Tab.Screen name="新增商品" component={Product} />
      <Tab.Screen
        name="Click測試"
        component={Clicktest}
        initialParams={{ count: 10 }}
      />
    </Tab.Navigator>
  );
}
