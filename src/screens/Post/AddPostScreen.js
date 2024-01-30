import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";

import { uid } from "uid";

import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from "../../styles/AddPost";

import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
//import ImagePicker from 'react-native-image-crop-picker';
//import ImagePicker from 'react-native-image-picker'
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../../firebase";

const AddPostScreen = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState("");

  const takePhotoFromCamera = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const submitPost = async (imageUrl) => {
    // const imageUrl = await uploadImage();
    // console.log('Image Url: ', imageUrl);
    console.log("Post: ", post);

    await firebase
      .firestore()
      .collection("posts")
      .add({
        userId: "user id goes here after adding firebase auth",
        post: post,
        postImg: imageUrl,
        postTime: firebase.firestore.Timestamp.fromDate(new Date()),
        likes: null,
        comments: null,
      })
      .then((docRef) => {
        if (docRef.id) {
          firebase
            .firestore()
            .collection("posts")
            .doc(docRef.id)
            .update({ id: docRef.id });
        }
        console.log("Post Added!");
        Alert.alert(
          "Post published!",
          "Your post has been published Successfully!"
        );
        setPost(null);
      })
      .catch((error) => {
        console.log(
          "Something went wrong with added post to firestore.",
          error
        );
      });
  };

  const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });
    const ref = firebase.storage().ref().child(`Pictures/${uid()}`);
    const snapshot = ref.put(blob);
    snapshot.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setUploading(true);
      },
      (error) => {
        setUploading(false);
        console.log(error);
        blob.close();
        return;
      },
      () => {
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
          setUploading(false);
          console.log("Download URL: ", url);
          setImage(url);
          blob.close();
          submitPost(url);
          return url;
        });
      }
    );
  };

  return (
    <View style={styles.container}>
      <InputWrapper>
        {image != null ? <AddImage source={{ uri: image }} /> : null}

        {uploading ? (
          <StatusWrapper>
            <Text> {transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn onPress={uploadImage}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        )}

        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
          onChangeText={setPost}
        />
      </InputWrapper>

      <ActionButton buttonColor="#2e64e5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={takePhotoFromCamera}
        >
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={pickImage}
        >
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});
