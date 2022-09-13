import { View, Text, ImageBackground, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
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
          <Text className="font-bold text-center text-4xl text-white">Algoritmo 1</Text>
          <Text className="text-xl text-center font-light text-gray-300">Desition Tree</Text>
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
            {/*
            <Text className='h-11'></Text>
            <Text className="font-bold text-4xl text-white">Algoritmo 1</Text>
            <Text className="h-2"></Text>
            <Text className="text-xl font-light text-gray-300">Desition Tree</Text>
            <Text className='h-5'></Text>
            */}
            
            {/* Justificación */}
            <View className="flex-row items-center space-x-2 mx-4 mb-4">
                    <View className="flex-column flex-1 space-x-2 p-2 space-y-3 bg-gray-100 opacity-60" style={{borderRadius: 20}}>

                        <Text className="font-bold text-xl text-gray-900">Justificación</Text>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-900 text-justify right-1">Aquí va la justificación
                            Aquí va la justificación
                            Aquí va la justificación
                              Aquí va la justificación
                              Aquí va la justificación
                              Aquí va la justificación
                              Aquí va la justificación
                              Aquí va la justificación
                              Aquí va la justificación
                              Aquí va la justificación
                            </Text>
                        </View>
                    </View>
              </View>

              {/* Resultados */}
              <View>
                <Text className='h-8'></Text>
                <Text className="font-bold text-3xl text-white">Resultados</Text>
                <Text className="h-4"></Text>

                {/* Presición Obtenida */}
                <View>
                  <Text className="text-xl font-semibold text-gray-300">Presición Obtenida</Text>
                  <Text className='h-3'></Text>
                  <Image 
                  source={ require('../assets/adriana.jpg') }
                  className="h-[300px] w-[350px]"
                  />
                </View>
                {/* Matriz de Confusión */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">Matriz de Confusión</Text>
                  <Text className='h-3'></Text>
                  <Image 
                  source={ require('../assets/adriana.jpg') }
                  className="h-[300px] w-[350px]"
                  />
                </View>

                {/* ROC */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">ROC</Text>
                  <Text className='h-3'></Text>
                  <Image 
                  source={ require('../assets/adriana.jpg') }
                  className="h-[300px] w-[350px]"
                  />
                </View>

                {/* AUC */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">AUC</Text>
                  <Text className='h-3'></Text>
                  <Image 
                  source={ require('../assets/adriana.jpg') }
                  className="h-[300px] w-[350px]"
                  />
                </View>
                {/* Kaggle */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">Puntaje Obtenido en Kaggle</Text>
                  <Text className='h-3'></Text>
                  <Image 
                  source={ require('../assets/adriana.jpg') }
                  className="h-[300px] w-[350px]"
                  />
                </View>

              </View>




          </View>

      </ScrollView>

    </SafeAreaView>
    
    </ImageBackground>
  )
}