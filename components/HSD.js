import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function HSD() {
  return (
    <View>
      <Text>HSD</Text>
    </View>
  )
}

export default function HSD({id, title, description}) {

  
    return (
      <View>
        <View className='mt-4 flex-row items-center justify-between px-4'>
          <Text className='font-bold text-lg'>{title}</Text>
        </View>
        <Text className='text-xs text-gray-500 px-4'>{description}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='pt-4'
          contentContainerStyle={{
              paddingHorizontal: 15,
  
          }}>
          </ScrollView>
      </View>
    )
  }