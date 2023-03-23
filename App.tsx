import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/AppNavigator";
import { store } from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
