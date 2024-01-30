import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Pressable } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import {  getRecipesByRecipeName, getRecipesByCategoryName, getRecipesByIngredientName } from "../../data/MockDataAPI";
import { TextInput } from "react-native-gesture-handler";
import { trainers } from "../../data/dataArrays";
import { getNumberOfTrainers } from "../../data/MockDataAPI";

import {
  getTrainersName,
  getTrainersById,
} from "../../data/MockDataAPI";

export default function TrainersScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.item;
  //const trainers = getTrainersById(item.trainersId);
  const name = getTrainersName(trainers.id);

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
          />
          <Pressable onPress={() => handleSearch("")}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/close.png")} />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  useEffect(() => {}, [value]);

  const handleSearch = (text) => {
    setValue(text);
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var recipeArray3 = getRecipesByIngredientName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];

    if (text == "") {
      setData([]);
    } else {
      setData(recipeArray);
    }
  };

  const onPressTrainers = (item) => {
    const title = item.name;
    const trainer = item;
    navigation.navigate("TrainersList", { trainer, title });
  };


{/**
 const onPressTrainers = (item) => {
  navigation.navigate("TrainersList", { item });
};
 
 */}
 
  const renderTrainer = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressTrainers(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={item.photo_url }/>
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>Total Trainers: {getNumberOfTrainers(item.id)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList data={trainers} renderItem={renderTrainer} keyExtractor={(item) => `${item.id}`} />
    </View>
  );

  





}
