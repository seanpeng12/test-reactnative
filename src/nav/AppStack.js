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

import AppTab from ".src/nav/AppTab";

function appTabpage() {
  return <AppTab />;
}

const Stack = createStackNavigator();

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

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="謎燈遊戲" component={home} />
      {/* <Stack.Screen name="主畫面" component={appTabpage} /> */}
    </Stack.Navigator>
  );
}
