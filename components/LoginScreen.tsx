import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { login } from "../api/http/http";
import { useDispatch } from "react-redux";
import { removeToken, stetToken } from "../store/auth/token";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleButtonClick = async () => {
    const { token } = await login({ email: username, password: password });
    dispatch(stetToken(token));
    dispatch(removeToken());
    navigation.navigate("Test-Page");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={username}
        onChangeText={setUsername}
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>Login</Text>
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

export default LoginScreen;
