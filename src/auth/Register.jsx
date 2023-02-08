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

const Register = ({ navigation }) => {
  const { setIsLoggedIn } = useAuthContext();

  const scrollRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [validPassword, setValidPassword] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);

  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validPassReg =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[-?!@#$%^&*])[A-Za-z\d-?!@#$%^&*]{10,}$/;

  const atLeastOneDigit = /\d/;
  const atLeastOneSpecialChar = /[-?!@#$%^&*]/;
  const atLeastOneUpperCase = /[A-Z]/;

  const checkPassword = (password) => {
    setPassword(password);
    if (!validPassReg.test(password)) {
      setValidPassword(false);
      return false;
    }
    setValidPassword(true);
    return true;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Register</Text>
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
                autoCapitalize="none"
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

              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={(text) => {
                  text === password
                    ? setMatchPassword(true)
                    : setMatchPassword(false);
                }}
                onFocus={() => {
                  scrollRef.current.scrollTo({ y: 170, animated: true });
                }}
              />
              <View style={styles.warningContainer}>
                <Text style={styles.warningText}>
                  Your password {validPassword ? "" : "must "}contain
                  {validPassword ? "s" : ""} at least:
                </Text>
                <View style={styles.warningView}>
                  <Image
                    source={
                      password.length >= 10
                        ? require("../../assets/tick.png")
                        : require("../../assets/cross.png")
                    }
                    style={styles.ticks}
                  />
                  <Text
                    style={
                      password.length >= 10 ? styles.greenText : styles.redText
                    }
                  >
                    10 characters
                  </Text>
                </View>
                <View style={styles.warningView}>
                  <Image
                    source={
                      atLeastOneDigit.test(password)
                        ? require("../../assets/tick.png")
                        : require("../../assets/cross.png")
                    }
                    style={styles.ticks}
                  />
                  <Text
                    style={
                      atLeastOneDigit.test(password)
                        ? styles.greenText
                        : styles.redText
                    }
                  >
                    1 digit
                  </Text>
                </View>
                <View style={styles.warningView}>
                  <Image
                    source={
                      atLeastOneSpecialChar.test(password)
                        ? require("../../assets/tick.png")
                        : require("../../assets/cross.png")
                    }
                    style={styles.ticks}
                  />
                  <Text
                    style={
                      atLeastOneSpecialChar.test(password)
                        ? styles.greenText
                        : styles.redText
                    }
                  >
                    1 special character
                  </Text>
                </View>
                <View style={styles.warningView}>
                  <Image
                    source={
                      atLeastOneUpperCase.test(password)
                        ? require("../../assets/tick.png")
                        : require("../../assets/cross.png")
                    }
                    style={styles.ticks}
                  />
                  <Text
                    style={
                      atLeastOneUpperCase.test(password)
                        ? styles.greenText
                        : styles.redText
                    }
                  >
                    1 uppercase letter
                  </Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.registerButton}
                disabled={
                  !validPassword || !matchPassword || !emailReg.test(email)
                }
                onPress={() => setIsLoggedIn(true)}
              >
                <Text style={styles.registerText}>Register</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
  warningContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  warningView: {
    flexDirection: "row",
  },
  ticks: {
    height: 14,
    width: 14,
    marginRight: 5,
  },
  greenText: {
    color: "#7CB342",
  },
  redText: {
    color: "#DD3333",
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
