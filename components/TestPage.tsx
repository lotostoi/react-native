import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const TestPage = () => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>
          <Text>Test page!</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 4,
    padding: 8,
    margin: 8,
    width: "80%",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0066cc",
    padding: 12,
    borderRadius: 4,
    marginTop: 32,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default TestPage;
