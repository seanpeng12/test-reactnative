import React, { useState } from "react";
import { Image, Button, View, LogBox } from "react-native";
import * as ImagePicker from "expo-image-picker";

import * as firebase from "firebase";
import * as FirebaseCore from "expo-firebase-core";
import { config } from "../person/firebase_config";

import styles from "../styles";
import { Text } from "native-base";
// progress
import * as Progress from "react-native-progress";

export default function ImageUpload() {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  // 動畫
  const [indeterminate, setIndeterminate] = useState(false);
  const [show, setShow] = useState(false);

  const [selectedImage, setSelectedImage] = useState({
    localUri: "https://i.imgur.com/TkIrScD.png",
  });
  const [message, setMessage] = useState("");

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  let uploadImage = async (uri) => {
    try {
      setMessage("上傳中...");
      setIndeterminate(true);
      setShow(true);
      const response = await fetch(uri);
      const blob = await response.blob();
      // 新增 reference to "my-image"

      const ranNum = Math.random();
      const ref = firebase
        .storage()
        .ref()
        .child("my-image" + ranNum);
      // 上傳
      const snapshot = await ref.put(blob);
      // getDownloadURL
      const url = await snapshot.ref.getDownloadURL();
      console.log("url:" + url);
      setMessage("檔案已上傳");
      setShow(false);
    } catch (error) {
      setShow(false);
      setMessage(error.message);
    }
  };

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      setMessage("存取照片庫權限失敗，請打開您手機的權限!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (!pickerResult.cancelled) {
      // 如果沒被取消
      setSelectedImage({ localUri: pickerResult.uri });
      uploadImage(pickerResult.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedImage.localUri }} style={styles.logo} />
      <Button onPress={openImagePickerAsync} title="選擇檔案" />
      <Text>{message}</Text>
      <View>
        {show ? (
          <Progress.Bar
            width={200}
            progress={0}
            indeterminate={indeterminate}
          />
        ) : null}
      </View>
    </View>
  );
}
