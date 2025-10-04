import { router } from 'expo-router'
import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class signIn extends Component {
  render() {
    return (
      <View>
        <Text> Sign In First </Text>
        <Button title='Sign In' onPress={()=>router.push("/sign-up")}></Button>
      </View>
    )
  }
}
