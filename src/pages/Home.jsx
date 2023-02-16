import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";

import { SearchBar } from "../components/SearchBar";
import PasswordItem from "../components/PasswordItem";

const data = [
  {
    id: 1,
    username: "user1",
    password: "password1",
    websiteLink: "www.google.com",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
    websiteLink: "www.twitter.com",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    websiteLink: "www.facebook.com",
  },
  {
    id: 4,
    username: "user4",
    password: "password4",
    websiteLink: "www.instagram.com",
  },
  {
    id: 5,
    username: "user5",
    password: "password5",
    websiteLink: "www.youtube.com",
  },
  {
    id: 6,
    username: "user6",
    password: "password6",
    websiteLink: "www.reddit.com",
  },
  {
    id: 7,
    email: "harry.viennot@epitech.eu",
    password: "password7passw",
    websiteLink: "www.netflix.com",
  },
  {
    id: 8,
    email: "extralongharry.viennot@epitech.eu",
    password: "password8",
    websiteLink: "www.amazon.com",
  },
  {
    id: 9,
    email: "harry.viennot@epitech.eu",
    password: "password9",
    websiteLink: "www.apple.com",
  },
  {
    id: 10,
    email: "harry.viennot@epitech.eu",
    password: "password10",
    websiteLink: "www.linkedin.com",
  },
  {
    id: 11,
    username: "user11",
    password: "password11",
    websiteLink: "www.pornhub.com",
  },
];

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  // const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const retrieveData = async () => {
    try {
      const response = await fetch("./passwords.json");
      console.log(response);
      const { data } = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setSortedData(
      [...data].sort((a, b) => a.websiteLink.localeCompare(b.websiteLink))
    );
  }, []);

  // useEffect(() => {
  //   retrieveData();
  //   setData(data);
  // }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchBarInput} placeholder="Search" />
          <Image
            source={require("../../assets/search.png")}
            style={{ height: 25, width: 25 }}
          />
        </View>
        <FlatList
          data={sortedData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View onStartShouldSetResponder={() => true}>
              <PasswordItem item={item} />
            </View>
          )}
          style={styles.passwordContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    margin: 13,
    marginBottom: 0,
  },
  searchBar: {
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1E90FF",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchBarInput: {
    flex: 1,
  },
  passwordContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#fff",
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
});
