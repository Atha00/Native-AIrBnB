import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Profile extends React.Component {
  static navigationOptions = {
    title: "Votre profil",
    headerStyle: {
      backgroundColor: "#fc5c63"
    },
    headerTitleStyle: {
      color: "white",
      fontSize: 24,
      fontWeight: "200"
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
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
        <Text style={styles.generalText}>
          {this.props.navigation.state.params.username} : your profile
        </Text>
        <Image
          style={[{ width: 200, height: 200 }, styles.profileImage]}
          source={{ uri: this.props.navigation.state.params.picture }}
        />
        <Text style={styles.generalText}>
          {this.props.navigation.state.params.description}
        </Text>
      </View>
    );
  }

  componentDidMount() {
    console.log("PROPS", this.props.navigation.state.params);
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fc5c63",
    alignItems: "center",
    flex: 1
  },
  buttonView: {
    marginBottom: 100
  },
  profileImage: {
    borderRadius: 100,
    margin: 10
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
  },
  generalText: {
    color: "white",
    fontSize: 18,
    margin: 10
  }
});

export default Profile;
