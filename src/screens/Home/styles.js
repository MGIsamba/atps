import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyles";

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width:"80%",
    paddingTop:10
  },
  item:{
    alignItems:"center",
  },
  text:{
    fontSize:10,
    marginTop:5
  }
});

export default styles;
