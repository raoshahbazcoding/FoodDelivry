import { Redirect, Slot } from 'expo-router'
import React, { Component } from 'react'

export default class _layout extends Component {
  render() {

        const isAutenticated = false
        if(!isAutenticated) return <Redirect href='/sign-in' />
    return <Slot/>
  }
}
