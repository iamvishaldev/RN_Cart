// react component
import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
// navigation container
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/navigation/MainStack/MainStack'
import { Colors } from './src/global'

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: Colors.THEME_COLOR }}>
        <StatusBar backgroundColor={Colors.THEME_COLOR} />
        <MainStack />
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})