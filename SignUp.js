import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    email: "",
    username: "",
    description: "",
    name: "",
    password: ""
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>
          <TextInput
            autoCapitalize="none"
            style={styles.loginInput}
            placeholder="random@random.fr"
            onChangeText={value => {
              this.setState({
                email: value
              });
            }}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.loginInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={value => {
              this.setState({
                password: value
              });
            }}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.loginInput}
            placeholder="AirBnB-username"
            onChangeText={value => {
              this.setState({
                username: value
              });
            }}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.loginInput}
            placeholder="Name"
            onChangeText={value => {
              this.setState({
                name: value
              });
            }}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.loginInput}
            placeholder="Age, adresse, parcours..."
            onChangeText={value => {
              this.setState({
                description: value
              });
            }}
          />
          <TouchableOpacity
            style={styles.button}
            title="Go to Profile page"
            onPress={() => {
              axios
                .post("https://airbnb-api.now.sh/api/user/sign_up", {
                  email: this.state.email,
                  name: this.state.name,
                  password: this.state.password,
                  username: this.state.username,
                  description: this.state.description
                })
                .then(response => {
                  console.log("RESPONSE", response.data);
                  this.props.navigation.navigate("Profile", {
                    username: response.data.account.username,
                    // picture: response.data.account.photos[0],
                    description: response.data.account.description
                  });
                })
                .catch(err => {
                  console.log(err);
                });
            }}
          >
            <Text style={styles.buttonText}>SignUp</Text>
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
    marginVertical: 15,
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

export default SignUp;
