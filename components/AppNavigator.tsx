import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import TestPage from "./TestPage";
import IsAuthComponent from "../components/Auth/IsAuthComponent";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Test-Page"
        component={() => (
          <IsAuthComponent>
            <TestPage />
          </IsAuthComponent>
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
