import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuthContext } from "../contexts/AuthContext";

import Welcome from "./auth/Welcome";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./pages/Home";

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

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
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <AppStack.Screen name="NewPassword" component={NewPassword} />
      <AppStack.Screen name="Profile" component={Profile} /> */}
    </AppStack.Navigator>
  );
};

const Navigation = () => {
  const { isLoggedIn } = useAuthContext();

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
