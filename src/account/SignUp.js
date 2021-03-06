import React, { useDebugValue, useState } from "react";
import { Button, View, Text, TextInput } from "react-native";
// firebase引入
import * as firebase from "firebase";
import * as FirebaseCore from "expo-firebase-core";
//
import styles from "../styles";

export default function SignUp() {
  const [displayName, setDisplayName] = useState("sss");
  const [email, setEmail] = useState("123@gmail.com");
  const [password, setPassword] = useState("0000");
  const [message, setMessage] = useState(""); //for error message from signUp
  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
    setMessage("資料庫連接已就緒");
  }
  async function signUp() {
    try {
      setMessage("註冊中...");
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      res.user.updateProfile({ displayName: displayName });
      // const res2 = await res.then(() => {
      //   console.log("已新增email password");
      //   const user = firebase.auth().currentUser;
      //   user.updateProfile({ displayName: displayName });
      // });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setMessage("使用者註冊完成!");
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.inputStyle}
        placeholder="姓名"
        value={displayName}
        onChangeText={(text) => setDisplayName(text)}
      />
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
      <Button title="註冊" onPress={signUp} />

      <Text>已經註冊，我要登入</Text>
      <Text>{message}</Text>
    </View>
  );
}
