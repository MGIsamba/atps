import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="Home"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Tab");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="A COY TRAINERS"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Trainers");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="PLATOON"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Platoon");
            navigation.closeDrawer();
          }}
        />
         <MenuButton
          title="BEAT AND PATROL"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("BeatList");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="NEWS & FEEDS"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("NewsList");
            navigation.closeDrawer();
          }}
        />
          <MenuButton
          title="ABOUT US"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("AboutUs");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
         <MenuButton
          title="Post"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("AddPost");
            navigation.closeDrawer();
          }}
        />
         <MenuButton
          title="Chat"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Message");
            navigation.closeDrawer();
          }}
        />
       
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
