import { getStackTraceLines } from "jest-message-util";
import React, { Component } from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import GetStarted from "./src/screens/getStarted";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen component={GetStarted} name={getStarted} />
      </Stack.Navigator>
    );
  }
}
