import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome!</Text>
      </View>
      <View style={styles.authContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logoIcon}
          />
          <Text style={styles.logoText}>SecureVault</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginText}>Log In</Text>
          </Pressable>
          <Pressable
            style={styles.registerButton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerText}>Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1E90FF",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "white",
  },
  authContainer: {
    flex: 4,
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  logoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
    width: 115,
    height: 146,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "#EEEEEF",
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "black",
    fontSize: 25,
  },
  registerButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  registerText: {
    color: "white",
    fontSize: 25,
  },
  input: {
    marginBottom: 21,
    backgroundColor: "#EEEEEF",
    borderRadius: 15,
    height: 60,
    paddingLeft: 20,
    fontSize: 17,
  },
});
