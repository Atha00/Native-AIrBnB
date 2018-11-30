import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
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

  _keyExtractor = (item, index) => item._id;

  render() {
    console.log(this.state.data);
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <TouchableOpacity
              title="Go to results page"
              onPress={() => {
                this.props.navigation.navigate("RoomDetails", {
                  roomId: item._id
                });
              }}
            >
              <RoomCard
                title={item.title}
                profilPicture={item.user.account.photos[0]}
                roomPicture={item.photos[0]}
                price={item.price}
                rating={item.ratingValue}
                reviews={item.reviews + " reviews"}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Rooms;
