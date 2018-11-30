import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import axios from "axios";

class Search extends React.Component {
  state = {
    city: ""
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>
          <Text style={{ color: "white" }}>
            Enter the city where you want to find room :
          </Text>
          <TextInput
            autoCapitalize="none"
            style={styles.loginInput}
            onChangeText={value => {
              this.setState({
                city: value
              });
            }}
          />
          <TouchableOpacity
            style={styles.button}
            title="Go to results page"
            onPress={() => {
              axios
                .get("https://airbnb-api.now.sh/api/room", {
                  params: {
                    city: this.state.city
                  }
                })
                .then(response => {
                  console.log(response.data);
                  this.props.navigation.navigate("RoomsList", {
                    data: response.data.rooms
                  });
                })
                .catch(err => {
                  console.log(err);
                });
            }}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#fc5c63",
    alignItems: "center",
    flex: 1
  },
  loginInput: {
    backgroundColor: "#fc5c63",
    width: 300,
    height: 50,
    marginVertical: 10,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    fontSize: 20,
    color: "white",
    paddingLeft: 10
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

export default Search;
