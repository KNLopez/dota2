import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MatchDetails from "../screens/MatchDetail";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Pro Matches", headerShown: false }}
        />
        <Stack.Screen
          name="MatchDetails"
          component={MatchDetails}
          options={{ title: "Match Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
