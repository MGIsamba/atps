import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getTrainers, getCategoryName } from "../../data/MockDataAPI";

export default function TrainersListScreen(props) {
  const { navigation, route } = props;

  const item = route?.params?.trainer;
  const trainersArray = getTrainers(item.id);


  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);


  const onPressTrainers = (item) => {
    navigation.navigate("TrainerDetail", { item });
  };

  const renderTrainers = ({ item }) => (
    
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressTrainers(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={item.photo_url } />
        <Text style={styles.forceNumber}>{item.name}</Text>
        <Text style={styles. fullName}>{item. position}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={trainersArray} renderItem={renderTrainers} keyExtractor={(item) => `${item.detailId}`} />
    </View>
  );
}
