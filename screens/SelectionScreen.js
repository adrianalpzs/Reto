import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function SelectionScreen() {
  return (
    <ImageBackground
    source={require('../assets/fondocc.jpg')}
    style={{width: '100%', height: '120%'}}
    className='opacity-70'
    > 
    <View>
      <Text>SelectionScreen</Text>
    </View>
    </ImageBackground>
  )
}