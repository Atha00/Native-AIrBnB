import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";
import RoomCard from "./RoomCard";
import MapView from "react-native-maps";

class RoomDetails extends React.Component {
  state = {
    roomData: {},
    lines: 3
  };

  render() {
    console.log("id transmis", this.props.navigation.state.params.roomId);
    if (this.state.roomData.user !== undefined) {
      if (
        this.state.roomData._id !== this.props.navigation.state.params.roomId
      ) {
        axios
          .get(
            "https://airbnb-api.now.sh/api/room/" +
              this.props.navigation.state.params.roomId
          )
          .then(response => {
            console.log("VRAIMENT ?", response.data);
            this.setState({
              roomData: response.data
            });
          })
          .catch(err => {
            console.log(err);
          });
        return <Text>Loading...</Text>;
      } else {
        return (
          <ScrollView style={styles.container}>
            <RoomCard
              globalMargin={{
                marginLeft: 0,
                marginRight: 0,
                borderBottomWidth: 0,
                marginBottom: 0
              }}
              imgScale={{ height: 300 }}
              legendScale={{ marginHorizontal: 20 }}
              title={this.state.roomData.title}
              profilPicture={this.state.roomData.user.account.photos[0]}
              roomPicture={this.state.roomData.photos[0]}
              price={this.state.roomData.price}
              rating={this.state.roomData.ratingValue}
              reviews={this.state.roomData.reviews + " reviews"}
            />
            <Text
              style={styles.description}
              numberOfLines={this.state.lines}
              onPress={() => {
                if (this.state.lines === 3) {
                  this.setState({
                    lines: 0
                  });
                } else {
                  this.setState({
                    lines: 3
                  });
                }
              }}
            >
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
      }
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
        console.log("VRAIMENT ?", response.data);
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
  container: {
    marginTop: 30
  },
  description: {
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 10
  }
});

export default RoomDetails;
