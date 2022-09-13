import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function PredictionScreen() {
  return (
    <ImageBackground
    source={require('../assets/fondocc.jpg')}
    style={{width: '100%', height: '120%'}}
    className='opacity-70'
    > 
    <View>
      <Text className='text-white'>PredictionScreen</Text>
    </View>
    </ImageBackground>
  )
}