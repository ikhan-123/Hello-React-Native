import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={{
      backgroundColor: 'black', // or change this to another color
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        color: 'orange', // change to black or any visible color
        fontSize: 30
      }}>
        Hello React Native
      </Text>
      <Link href={'about'} style={{
        fontSize: 30,
        color: 'orange'
      }}></Link>
    </View>
  )
}

export default Home
