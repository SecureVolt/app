import { Text, View, StyleSheet, Image } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Home!</Text>
      </View>
      <View style={styles.authContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logoIcon}
          />
          <Text style={styles.logoText}>SecureVault</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

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
});
