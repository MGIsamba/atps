import React, { useContext, useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from "../../styles/FeedStyles";
import { firebase } from "../../../firebase";

import ProgressiveImage from "./ProgressiveImage";
import CommentsModal from "../CommentsModal";
import { Alert } from "react-native";

//import {AuthContext} from '../navigation/AuthProvider';

//import moment from 'moment';
//import {TouchableOpacity} from 'react-native-gesture-handler';
//import firestore from '@react-native-firebase/firestore';

const PostCard = ({ item }) => {
  likeIcon = item.liked ? "heart" : "heart-outline";
  likeIconColor = item.liked ? "#2e64e5" : "#333";

  const [liked, setLiked] = useState(item.liked);
  const [modalVisible, setModalVisible] = useState(false);

  if (item.likes == 1) {
    likeText = "1 Like";
  } else if (item.likes > 1) {
    likeText = item.likes + " Likes";
  } else {
    likeText = "Like";
  }

  if (item.comments?.length === 1) {
    commentText = "1 Comment";
  } else if (item.comments?.length > 1) {
    commentText = item.comments?.length + " Comments";
  } else {
    commentText = "Comment";
  }

  const onLike = async () => {
    await firebase.firestore().collection("posts").doc(item.id).update({
      liked: !item.liked,
    });
    setLiked(!item.liked);
  };

  const setModal = ()=> {
    Alert.alert("pppppp")
    console.log("pppppp")
  }

  console.log("dataaa", item.postTime);
  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{moment(item.postTime.seconds).toString()}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg != "none" ? (
        <PostImg source={{ uri: item.postImg }} />
      ) : (
        <Divider />
      )}

      <InteractionWrapper>
        <Interaction active={liked} onPress={onLike}>
          <Ionicons name={likeIcon} size={25} color={likeIconColor} />
          <InteractionText active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        <Interaction onPress={() => setModalVisible(true)}>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>{commentText}</InteractionText>
        </Interaction>
      </InteractionWrapper>
      {modalVisible? (
        <CommentsModal
          setModalVisible={setModalVisible}
          post={item}
        />
      ):null}
    </Card>
  );
};

export default PostCard;
