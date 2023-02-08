import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Image,
} from "react-native";
import { useState, useRef } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

// TODO: Add a password strength meter
// TODO: Add error messages for invalid email and password

const Login = ({ navigation }) => {
  const { setIsLoggedIn } = useAuthContext();

  const scrollRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Log In</Text>
          </View>
          <View style={styles.authContainer}>
            <ScrollView
              ref={scrollRef}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 125,
              }}
            >
              <TextInput
                style={styles.firstInput}
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                }}
                onFocus={() => {
                  scrollRef.current.scrollTo({ y: 0, animated: true });
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => {
                  checkPassword(text);
                }}
                autoCapitalize="none"
                autoCorrect={false}
                onFocus={() => {
                  scrollRef.current.scrollTo({ y: 85, animated: true });
                }}
                secureTextEntry
              />
            </ScrollView>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.registerButton}
                onPress={() => setIsLoggedIn(true)}
              >
                <Text style={styles.registerText}>Log In</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1E90FF",
    paddingTop: 20,
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
    paddingHorizontal: 25,
    borderStartRadius: 15,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    justifyContent: "flex-end",
  },
  registerButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  registerText: {
    color: "white",
    fontSize: 25,
  },
  firstInput: {
    marginTop: 20,
    marginBottom: 21,
    backgroundColor: "#EEEEEF",
    borderRadius: 15,
    height: 65,
    paddingLeft: 20,
    fontSize: 17,
  },
  input: {
    marginBottom: 21,
    backgroundColor: "#EEEEEF",
    borderRadius: 15,
    height: 65,
    paddingLeft: 20,
    fontSize: 17,
  },
});
