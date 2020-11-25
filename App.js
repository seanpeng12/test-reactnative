import * as React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Alert, StyleSheet } from "react-native";

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

// 引入test
import Test from "./src/person/personList";
// 引入productList
import ProductList from "./src/product/ProductList";

import FirebaseList from "./src/person/firebaseList";

// firbase取資料
function FirebaseGet() {
  return (
    <View style={styles.container}>
      <FirebaseList />
    </View>
  );
}
// airtable新增資料
function AirtableScreen() {
  return (
    <View style={styles.container}>
      <Test />
    </View>
  );
}
// local新增刪除資料
function Product() {
  return (
    <View style={styles.container}>
      <ProductList />
    </View>
  );
}

// stack頁面:home
function home({ navigation }) {
  const users = [
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <Card.Title>按下進入</Card.Title>
        <Card.Divider />
        {users.map((u, i) => {
          return (
            <View key={i}>
              <Image resizeMode="cover" source={{ uri: u.avatar }} />
              <View style={{ paddingHorizontal: 100 }}>
                <Button
                  onPress={() => navigation.navigate("主畫面")}
                  title="開始使用"
                  type="clear"
                />
              </View>
            </View>
          );
        })}
      </Card>
    </View>
  );
}

// 引入
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// stack
function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="謎燈遊戲" component={home} />
      <Stack.Screen name="主畫面" component={AppTab} />
    </Stack.Navigator>
  );
}

// Tab
function AppTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "家") {
            iconName = focused ? "ios-home" : "ios-albums";
          } else if (route.name === "airtable") {
            iconName = focused ? "ios-list-box" : "ios-list-box";
          } else if (route.name === "本機新增商品") {
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
      <Tab.Screen name="airtable" component={AirtableScreen} />
      <Tab.Screen name="本機新增商品" component={Product} />
      {/* <Tab.Screen
        name="Click測試"
        component={Clicktest}
        initialParams={{ count: 10 }}
      /> */}
      {/* <Tab.Screen name="firebase" component={FirebaseGet} /> */}
    </Tab.Navigator>
  );
}

// drawers
function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator initialRouteName="歡迎頁面">
        <Drawer.Screen name="歡迎頁面" component={AppStack} />
        <Drawer.Screen name="其他功能" component={AppTab} />
        <Drawer.Screen name="Firebase" component={FirebaseGet} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
