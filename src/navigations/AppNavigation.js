import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import AuthStack from './AuthStackOLD'
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import HomeScreen from "../screens/Home/HomeScreen";
import AddPostScreen from "../screens/Post/AddPostScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import PlatoonScreen from "../screens/Platoons/PlatoonScreen";
import MessagesScreen from "../screens/Messages/MessagesScreen";
import TrainersScreen from "../screens/Trainers/TrainersScreen";
import TrainersListScreen from "../screens/TrainersList/TrainersListScreen";
import TrainerDetailScreen from "../screens/TrainerDetail/TrainerDetail";
import BeatScreen from "../screens/Beat/BeatScreen";
import BeatScreenList from "../screens/BeatList/BeatListScreen";
import RecipesScreen from "../screens/Recipe/RecipesScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import NewsListScreen from "../screens/NewsList/NewsListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import TabScreen from "../screens/Tab/TabScreen";
import SplashScreen from "../screens/Splash/SplashScreen";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";
import AboutUsScreen from "../screens/AboutUs/AboutUsScreen";
import BeatListScreen from "../screens/BeatList/BeatListScreen";

import OrdersUpload from "../screens/OrdersUpload";
import DocumentUpload from "../screens/DocumentUpload";
import TimeTableUpload from "../screens/TimeTableUpload"
import NewsUpload from "../screens/NewsUpload"

import { View } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          flex: 1,
        },
      }}
    >
      
          <Stack.Screen name=" " component={DrawerStack}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Tab" component={TabScreen} />
          <Stack.Screen name="AddPost" component={AddPostScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Platoon" component={PlatoonScreen} />
          <Stack.Screen name="Message" component={MessagesScreen} />
          <Stack.Screen name="Trainers" component={TrainersScreen} />
          <Stack.Screen name="TrainersList" component={TrainersListScreen} />
          <Stack.Screen name="TrainerDetail" component={TrainerDetailScreen} />
          <Stack.Screen name="Beat" component={BeatScreen} />
          <Stack.Screen name="BeatList" component={BeatScreenList} />
          <Stack.Screen name="Recipe" component={RecipesScreen} />
          <Stack.Screen name="RecipesList" component={RecipesListScreen} />
          <Stack.Screen name="NewsList" component={NewsListScreen} />
          <Stack.Screen name="Ingredient" component={IngredientScreen} />
          <Stack.Screen name="AboutUs" component={AboutUsScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen
            name="IngredientsDetails"
            component={IngredientsDetailsScreen}
          />
     
     
    </Stack.Navigator>
  );
}

const BeatStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Beat and Trainer Time Table" component={BeatScreenList} />
      <Stack.Screen name="Newslist" component={NewsListScreen} options={{
        headerTitle: "TPS News & Events",
        headerTitleStyle: {
          marginLeft: 50
        }
      }} />
       <Stack.Screen name="OrdersUpload" component={OrdersUpload} options={{
        headerTitle: "Orders & Instructions",
        headerTitleStyle: {
          marginLeft: 50
        }
      }} />
      <Stack.Screen name="DocumentUpload" component={DocumentUpload} options={{
        headerTitle: "Upload Document",
        headerTitleStyle: {
          marginLeft: 50
        }
      }} />
      <Stack.Screen name="TimeTableUpload" component={TimeTableUpload} options={{
        headerTitle: "TimeTableUpload",
        headerTitleStyle: {
          marginLeft: 50
        }
      }} />
      <Stack.Screen name="NewsUpload" component={NewsUpload} options={{
        headerTitle: "NewsUpload",
        headerTitleStyle: {
          marginLeft: 50
        }
      }} />
    </Stack.Navigator>
  )
}


const Drawer = createDrawerNavigator();


function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "Roboto-Medium",
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="TPS Online"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

     
      <Drawer.Screen
        name="Trainer"
        component={TrainersScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Platoon"
        component={PlatoonScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="News & Beats"
        component={BeatStack}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      {/*<Drawer.Screen
        name="News"
        component={NewsListScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />*/}
      <Drawer.Screen
        name="AboutUs"
        component={TrainerDetailScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Post"
        component={AddPostScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={MessagesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;

const FeedStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="RN Social"
      component={HomeScreen}
      options={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#2e64e5",
          fontFamily: "Kufam-SemiBoldItalic",
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: "#fff",
          elevation: 0,
        },
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate("AddPost")}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#2e64e515",
          shadowColor: "#2e64e515",
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "#fff",
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

export const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "";

    if (routeName === "Chat") {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#2e64e5",
      }}
    >
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({ route }) => ({
          tabBarLabel: "Home",
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
