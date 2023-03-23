import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const IsAuthComponent = ({ children }) => {
  const { token } = useSelector((state) => state.token);
  const navigation = useNavigation();

  if (!token) {
    return navigation.navigate("Test-Page");
  }

  return children;
};

export default IsAuthComponent;
