import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Profile extends React.Component {
  static navigationOptions = {
    title: "LOL",
    headerStyle: {
      backgroundColor: "#fc5c63"
    },
    headerTitleStyle: {
      color: "white"
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.button}
            title="Go to Search page"
            onPress={() => {
              this.props.navigation.navigate("Search");
            }}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <Text>
          Welcome to YOU, {this.props.navigation.state.params.username}
        </Text>
        <Image
          style={[{ width: 200, height: 200 }, styles.profileImage]}
          source={{ uri: this.props.navigation.state.params.picture }}
        />
        <Text>{this.props.navigation.state.params.description}</Text>
      </View>
    );
  }

  componentDidMount() {
    console.log("PROPS", this.props.navigation.state.params);
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#fc5c63",
    alignItems: "center",
    flex: 1
  },
  profileImage: {
    borderRadius: 50
  },
  button: {
    backgroundColor: "white",
    borderRadius: 50,
    height: 50,
    width: 120,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fc5c63",
    fontSize: 20
  }
});

export default Profile;
