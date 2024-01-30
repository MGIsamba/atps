import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { firebase } from "../../firebase";

const CommentsModal = ({ setModalVisible, post }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const saveComment = async () => {
    if (comment.length > 0) {
      setLoading(true)
      await firebase
        .firestore()
        .collection("posts")
        .doc(post.id)
        .update({
          comments: firebase.firestore.FieldValue.arrayUnion({
            username: "username",
            comment,
          }),
        });
      setComment("");
      setLoading(false)
    } else {
      Alert.alert("Comment can't be empty");
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHead}>
              <Text style={styles.modalText}>Comments</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonClose}>x</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.comments}>
              {post.comments?.map((data) => (
                <View style={styles.comment}>
                  <Text style={{ fontSize: 10 }}>{data.username}</Text>
                  <Text>{data.comment}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.cta}>
              <TextInput
                onChangeText={(text) => setComment(text)}
                style={styles.input}
                placeholder="Add a comment"
                value={comment}
              />
              {loading ? (
                <ActivityIndicator />
              ) : (
                <TouchableOpacity onPress={saveComment}>
                  <Text>Send</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    height: "80%",
  },
  modalHead: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
  },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  comments: {
    height: "87%",
    width: "100%",
    marginVertical: 10,
  },
  comment: {
    marginVertical: 5,
  },
  input: {
    padding: 5,
    paddingHorizontal: 15,
    width: "85%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonClose: {
    fontWeight: 400,
    fontSize: 20,
    marginTop: -5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CommentsModal;
