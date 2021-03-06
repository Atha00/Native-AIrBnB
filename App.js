import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "./Home";
import ProfileScreen from "./Profile";
import SignUpScreen from "./SignUp";
import SearchScreen from "./Search";
import RoomsListScreen from "./RoomsList";
import DetailsScreen from "./RoomDetails";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
      // navigationOptions: {
      //   header: null
      // }
    },
    SignUp: {
      screen: SignUpScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Search: {
      screen: SearchScreen
    },
    RoomsList: {
      screen: RoomsListScreen
    },
    RoomDetails: {
      screen: DetailsScreen
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home`;
        } else if (routeName === "Profile") {
          iconName = `user`;
        } else if (routeName === "Search") {
          iconName = `search`;
        } else if (routeName === "SignUp") {
          iconName = `envelope-open`;
        } else if (routeName === "RoomsList") {
          iconName = `list-ul`;
        } else if (routeName === "RoomDetails") {
          iconName = `location-arrow`;
        }
        return (
          <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
        );
      }
      // tabBarOnPress: ({navigation}) => {}
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#fc5c63",
      activeBackgroundColor: "#fc5c63",
      inactiveBackgroundColor: "white",
      style: {
        backgroundColor: "#fc5c63",
        borderTopWidth: 0
      }
    }
  },
  { backBehavior: "initialRoute" }
);

export default createAppContainer(TabNavigator);
