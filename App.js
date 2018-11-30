import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./Home";
import ProfileScreen from "./Profile";
import SignUpScreen from "./SignUp";
import SearchScreen from "./Search";
import RoomsScreen from "./Rooms";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: ProfileScreen
  },
  Search: {
    screen: SearchScreen
  },
  Rooms: {
    screen: RoomsScreen
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({});
