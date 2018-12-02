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

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Search: SearchScreen,
    SignUp: SignUpScreen,
    RoomsList: RoomsListScreen,
    RoomDetails: DetailsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : "-outline"}`;
        } else if (routeName === "Profile") {
          iconName = `user${focused ? "" : "-outline"}`;
        } else if (routeName === "Search") {
          iconName = `search${focused ? "" : "-outline"}`;
        } else if (routeName === "SignUp") {
          iconName = `envelope-open${focused ? "" : "-outline"}`;
        } else if (routeName === "RoomsList") {
          iconName = `list-ul${focused ? "" : "-outline"}`;
        } else if (routeName === "RoomDetails") {
          iconName = `location-arrow${focused ? "" : "-outline"}`;
        }
        return (
          <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const styles = StyleSheet.create({});
