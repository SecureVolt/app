import { Image, Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAuthContext } from "../contexts/AuthContext";

import Welcome from "./auth/Welcome";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./pages/Home";
import NewPassword from "./pages/NewPassword";

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const EmptyComponent = () => {
  return null;
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? require("../assets/unlock-filled.png")
              : require("../assets/unlock.png");
          } else if (route.name === "NewPassword") {
            iconName = require("../assets/plus-circle.png");
          } else if (route.name === "Profile") {
            iconName = focused
              ? require("../assets/user-filled.png")
              : require("../assets/user.png");
          }

          // You can return any component that you like here!
          // <Ionicons name={iconName} size={size} color={color} />
          //<Image
          //   style={{ width: 22, height: 22 }}
          //   source={require(iconName)}
          // />
          return <Image style={{ width: 30, height: 30 }} source={iconName} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          borderTopWidth: 0.5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "My Passwords",
          headerStyle: {
            backgroundColor: "#1E90FF",
          },
          headerTintColor: "#fff",
        }}
      />
      <Tab.Screen
        name="NewPassword"
        component={EmptyComponent}
        options={{ headerShown: false }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("NewPasswordModal");
          },
        })}
      />
      {/* <AppStack.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};

const AppNavigatorContainer = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="App"
        component={AppNavigator}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="NewPasswordModal"
        component={NewPassword}
        options={({ navigation }) => ({
          presentation: "modal",
          title: "New Password",
          animation: "slide_from_bottom",
          headerStyle: {
            backgroundColor: "#1E90FF",
          },
          headerTintColor: "#fff",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10, padding: 10 }}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>Cancel</Text>
            </Pressable>
          ),
        })}
      />
    </AppStack.Navigator>
  );
};

const Navigation = () => {
  const { isLoggedIn } = useAuthContext();

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigatorContainer /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
