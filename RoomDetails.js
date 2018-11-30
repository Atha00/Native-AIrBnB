import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";
import RoomCard from "./RoomCard";
import MapView from "react-native-maps";

class RoomDetails extends React.Component {
  state = {
    roomData: {}
  };
  render() {
    if (this.state.roomData.user !== undefined) {
      return (
        <ScrollView>
          <RoomCard
            title={this.state.roomData.title}
            profilPicture={this.state.roomData.user.account.photos[0]}
            roomPicture={this.state.roomData.photos[0]}
            price={this.state.roomData.price}
            rating={this.state.roomData.ratingValue}
            reviews={this.state.roomData.reviews + " reviews"}
          />
          <Text style={styles.description} numberOfLines={3}>
            {this.state.roomData.description}
          </Text>
          <View style={{ margin: 20 }}>
            <MapView
              style={{
                width: "100%",
                height: 300
              }}
              initialRegion={{
                latitude: this.state.roomData.city.loc[1],
                longitude: this.state.roomData.city.loc[0],
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: this.state.roomData.loc[1],
                  longitude: this.state.roomData.loc[0]
                }}
              />
            </MapView>
          </View>
        </ScrollView>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
  componentDidMount() {
    axios
      .get(
        "https://airbnb-api.now.sh/api/room/" +
          this.props.navigation.state.params.roomId
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          roomData: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    margin: 20
  }
});

export default RoomDetails;
