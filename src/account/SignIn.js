import React, { useEffect, useState } from "react";
import { Button, View, Text, TextInput } from "react-native";
//
import * as firebase from "firebase";
import * as FirebaseCore from "expo-firebase-core";
//
import * as SecureStore from "expo-secure-store";
import styles from "../styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
    setMessage("資料庫連接已就緒");
  }
  async function signIn() {
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setMessage("登入成功");
      const loginString = JSON.stringify({ email: email, password: password });
      await SecureStore.setItemAsync("login", loginString);
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function getAccount() {
    try {
      console.log("getAccount");
      setMessage("getting username");
      const loginString = await SecureStore.getItemAsync("login");
      const login = JSON.parse(loginString);
      setEmail(login.email);
      //   setPassword(login.password);
      setMessage("");
    } catch (error) {
      setMessage(error.message);
    }
  }

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.inputStyle}
        placeholder="電子信箱"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="密碼"
        value={password}
        onChangeText={(text) => setPassword(text)}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button title="登入" onPress={signIn} />
      <Text>{message}</Text>
      <Text>尚未註冊，我要註冊</Text>
    </View>
  );
}
