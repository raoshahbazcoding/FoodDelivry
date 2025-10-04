import { router } from "expo-router";
import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class signUp extends Component {
  render() {
    return (
      <View>
        <Text> Sign Up </Text>
        <Button
          title="Sign IN"
          onPress={() => router.push("/sign-in")}
        ></Button>
      </View>
    );
  }
}
