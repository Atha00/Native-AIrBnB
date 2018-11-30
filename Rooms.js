import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import RoomCard from "./RoomCard";

class Rooms extends React.Component {
  static navigationOptions = {
    title: "MonAirbnb",
    headerStyle: {
      backgroundColor: "#fc5c63"
    },
    headerTitleStyle: {
      fontSize: 24,
      color: "white",
      fontWeight: "200"
    }
  };
  state = {
    data: this.props.navigation.state.params.data
  };

  render() {
    console.log(this.state.data);
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <RoomCard
              title={item.title}
              profilPicture={item.user.account.photos[0]}
              roomPicture={item.photos[0]}
              price={item.price}
              rating={item.ratingValue}
              reviews={item.reviews + " reviews"}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Rooms;
