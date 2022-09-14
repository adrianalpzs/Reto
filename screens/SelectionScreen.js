import { View, Text, ImageBackground, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function SelectionScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
            source={require('../assets/fondocc.jpg')}
            style={{width: '100%', height: '120%'}}
            className='opacity-90'
            > 
    <SafeAreaView>
      {/* Header */}
    <View className="w-full p-5 border-b border-[#a2a2a2] opacity-70 shadow-xs">
        <View>
          <Text className="font-bold text-center text-4xl text-white">Selection</Text>
          <Text className="text-xl text-center font-light text-gray-300">Algoritmo Seleccionado</Text>
          <Text className="text-xs text-center font-light text-gray-300">Random Forest</Text>
        </View>
        <TouchableOpacity 
          onPress={navigation.goBack}
          className="absolute top-9 left-5 p-2">
          <ArrowLeftIcon size={20} color="gray" />
        </TouchableOpacity>

    </View>


      <ScrollView
        className="flex-1 px-2 py-4" 
        contentContainerStyle={{paddingBottom: 350}}
        >
          
          <View className="flex-grow space-x-2 mx-4 mb-4">
          <Text className='h-7'></Text>

            
            {/* Justificación */}
            <View className="flex-row items-center space-x-2 mx-4 mb-4">
                    <View className="flex-column flex-1 space-x-2 p-2 space-y-3 bg-gray-100 opacity-60" style={{borderRadius: 20}}>

                        <Text className="font-bold text-xl text-gray-900">Justificación</Text>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-900 text-justify right-1">Por temas de compatibilidad con anaconda, se optó
                            por el modelo de regresión logística. Sin embargo, el modelo de Random Forest obtuvo mayor precisión, pero no es 
                            una diferencia considerable comparada con este modelo.
                            Su principal ventaja es que obtiene un mejor rendimiento de generalización para un rendimiento durante entrenamiento similar. Esta mejora en la generalización la consigue compensando los errores de las predicciones de los distintos árboles de decisión.



                            </Text>
                            
                        </View>
                        
                        <Text className='h-0.5'></Text>
                        
                    </View>
                    
              </View>
              <Text className='h-8'></Text>
              <Image 
                source={ require('../assets/trf.png') }
                className="h-[260px] w-[345px]"
               />





          </View>

      </ScrollView>

    </SafeAreaView>
    
    </ImageBackground>
  )
}