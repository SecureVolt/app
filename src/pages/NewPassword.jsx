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

const NewPassword = ({ navigation }) => {
  const scrollRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.credentialContainer}>
            <ScrollView
              ref={scrollRef}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 300,
              }}
            >
              <TextInput
                style={styles.firstInput}
                placeholder="Website link"
                autoCapitalize="none"
                onChangeText={(text) => {
                  setWebsiteLink(text);
                }}
                onFocus={() => {
                  scrollRef.current.scrollTo({ y: 0, animated: true });
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => {
                  setUsername(text);
                }}
                autoCapitalize="none"
                onFocus={() => {
                  scrollRef.current.scrollTo({ y: 85, animated: true });
                }}
              />
              <View style={styles.seperator}>
                <View style={styles.line} />
                <Text style={styles.text}>or / and</Text>
                <View style={styles.line} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                }}
                autoCapitalize="none"
                onFocus={() => {
                  scrollRef.current.scrollTo({ y: 210, animated: true });
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => {
                  setPassword(text);
                }}
                autoCapitalize="none"
                onFocus={() => {
                  scrollRef.current.scrollTo({ y: 210, animated: true });
                }}
              />
            </ScrollView>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.saveButton}
                onPress={() => {
                  navigation.navigate("Home");
                }}
                disabled={(!email && !username) || !password || !websiteLink}
              >
                <Text style={styles.saveText}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1E90FF",
    paddingTop: 20,
  },
  credentialContainer: {
    flex: 1,
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
  seperator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 21,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#C4C4C4",
  },
  text: {
    marginHorizontal: 10,
    color: "#C4C4C4",
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    justifyContent: "flex-end",
  },
  saveButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  saveText: {
    color: "white",
    fontSize: 25,
  },
});
