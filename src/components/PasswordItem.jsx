import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const PasswordItem = ({ item }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null);

  const { username, email, websiteLink, password } = item;

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(
        `https://logo.clearbit.com/${websiteLink}`
      );
      setImage(response.request.responseURL);
    };
    fetchImage();
  }, [websiteLink]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        {/* <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 0.0, y: 1.0 }}
          locations={[0.0, 1.0]}
          colors={["#ffffff40", "#fffffff5"]}
          useViewFrame={false}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        > */}
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {username || email}
        </Text>
        {/* </LinearGradient> */}
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => {
          setShowPassword(!showPassword);
        }}
      >
        <Text style={styles.text}>
          {showPassword ? password : "**********"}
        </Text>
      </Pressable>
    </View>
  );
};

export default PasswordItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginRight: 10,
    margin: 5,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    marginHorizontal: 10,
  },
});
