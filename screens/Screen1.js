import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function Screen1() {
  return (
    <ImageBackground
            source={require('../assets/fondocc.jpg')}
            style={{width: '100%', height: '120%'}}
            className='opacity-70'
            > 
    <View>
      <Text>Screen1</Text>
    </View>
    </ImageBackground>
  )
}