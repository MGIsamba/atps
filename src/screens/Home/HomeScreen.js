import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PostCard from "../../components/Post/PostCard";
import { Container } from "../../styles/FeedStyles";

import { firebase } from "../../../firebase";
import CommentsModal from "../../components/CommentsModal";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const Posts = [
    {
      id: "1",
      userName: "INSP Simtoe",
      userImg: require("../../../assets/users/user-3.jpg"),
      postTime: "4 mins ago",
      post: "Mafunzo Maalumu ya kuwaongezea Walimu uwezo na maarifa zaidi",
      postImg: require("../../../assets/posts/post-img-3.jpg"),
      liked: true,
      likes: "14",
      comments: "5",
    },
    {
      id: "2",
      userName: "ASP Pazzia",
      userImg: require("../../../assets/users/user-1.jpg"),
      postTime: "2 hours ago",
      post: "Mafunzo Maalumu ya kuwaongezea Walimu uwezo na maarifa zaidi",
      postImg: "none",
      liked: false,
      likes: "8",
      comments: "0",
    },
    {
      id: "3",
      userName: "A/INSP John",
      userImg: require("../../../assets/users/user-4.jpg"),
      postTime: "1 hours ago",
      post: "Mafunzo Maalumu ya kuwaongezea Walimu uwezo na maarifa zaidi",
      postImg: require("../../../assets/posts/post-img-2.jpg"),
      liked: true,
      likes: "1",
      comments: "0",
    },
    {
      id: "4",
      userName: "INSP Simtoe",
      userImg: require("../../../assets/users/user-3.jpg"),
      postTime: "1 day ago",
      post: "Mafunzo Maalumu ya kuwaongezea Walimu uwezo na maarifa zaidi",
      postImg: require("../../../assets/posts/post-img-4.jpg"),
      liked: true,
      likes: "22",
      comments: "4",
    },
    {
      id: "5",
      userName: "ACP Msemwa",
      userImg: require("../../../assets/users/user-2.jpg"),
      postTime: "2 days ago",
      post: "Mafunzo Maalumu ya kuwaongezea Walimu uwezo na maarifa zaidi",
      postImg: "none",
      liked: false,
      likes: "0",
      comments: "0",
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    setLoading(true);
    firebase
      .firestore()
      .collection("posts")
      .onSnapshot((posts) => {
        const postsData = [];
        posts.forEach((post) => {
          // doc.data() is never undefined for query doc snapshots
          postsData.push(post.data());
        });
        setPosts(postsData);
        setLoading(false);
      });
  };

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} size={50} />;
  }

  return (
    <Container>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard item={item} />}
        // keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={()=> navigation.navigate("TPS Online")} style={styles.item}>
            <Ionicons name="home-outline" size={20} />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Message")} style={styles.item}>
          <FontAwesome5 size={20} name="comment"/>
          <Text style={styles.text}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Profile")} style={styles.item}>
          <FontAwesome5 size={20} name="user"/>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default HomeScreen;
