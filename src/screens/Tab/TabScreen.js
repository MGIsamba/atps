import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../../screens/Home/HomeScreen';
import AddPostScreen from '../../screens/Post/AddPostScreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import TrainersScreen from '../../screens/Trainers/TrainersScreen';
import TabScreen from '../../screens/Tab/TabScreen';
import PlatoonScreen from '../../screens/Platoons/PlatoonScreen';
//import ProfileScreen from '../screens/ProfileScreen'; screen tobe created
//<Tab.Screen name='Home' component={{HomeScreen}}/>


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



    
const FeedStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="TPS Online"
        component={TabScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#2e64e5',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 18,
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
          },
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <FontAwesome5.Button
                name="plus"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => navigation.navigate('AddPost')}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Message"
        component={AddPostScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2e64e515',
            shadowColor: '#2e64e515',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );



  const AppStack = () => {
    const getTabBarVisibility = (route) => {
      const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';
  
      if (routeName === 'Chat') {
        return false;
      }
      return true;
    };
  
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#2e64e5',
        }}>
        <Tab.Screen
          name="Home"
          component={FeedStack}
          options={({route}) => ({
            tabBarLabel: 'Home2',
            // tabBarVisible: route.state && route.state.index === 0,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            ),
          })}
        />
        <Tab.Screen
          name="AddPost"
          component={FeedStack}
          options={({route}) => ({
            tabBarLabel: 'Home1',
            // tabBarVisible: route.state && route.state.index === 0,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Trainers"
          component={FeedStack}
          options={({route}) => ({
            tabBarLabel: 'Home3',
            // tabBarVisible: route.state && route.state.index === 0,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            ),
          })}
        />
      </Tab.Navigator>
    );
  };
  
  
  export default AppStack;

