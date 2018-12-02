import React from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
// import { StackNavigator } from 'react-navigation';

class Home extends React.Component {
  state = {
    email: "arno@airbnb-api.com",
    password: "password01"
  };

  static navigationOptions = {
    title: "LogIn",
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
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView
          contentContainerStyle={[{ marginTop: 50 }, styles.container]}
        >
          <Image
            style={{ height: 200, width: 200, marginTop: -150 }}
            source={require("./assets/logo.png")}
          />
          <Text style={styles.title}>Welcome</Text>
          <TextInput
            autoCapitalize="none"
            style={styles.loginInput}
            keyboardType="email-address"
            onChangeText={value => {
              this.setState({
                email: value
              });
            }}
            value={this.state.email}
          />
          <TextInput
            style={styles.loginInput}
            secureTextEntry={true}
            onChangeText={value => {
              this.setState({
                password: value
              });
            }}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.button}
            title="Go to Profile page"
            onPress={() => {
              axios
                .post("https://airbnb-api.now.sh/api/user/log_in", {
                  email: this.state.email,
                  password: this.state.password
                })
                .then(response => {
                  console.log("RESPONSE", response.data);
                  this.props.navigation.navigate("Profile", {
                    username: response.data.account.username,
                    picture: response.data.account.photos[0],
                    description: response.data.account.description
                  });
                })
                .catch(err => {
                  console.log(err);
                });
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            title="Go to Profile page"
            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </ScrollView>
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
  title: {
    fontSize: 40,
    color: "white",
    marginBottom: 60,
    marginTop: 20
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

export default Home;
