import { View, Text, ImageBackground, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function Screen2() {
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
          <Text className="font-bold text-center text-4xl text-white">Algoritmo 2</Text>
          <Text className="text-xl text-center font-light text-gray-300">Logistic Regression</Text>
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
                    <View className="flex-column flex-1 space-x-6 p-2 space-y-3 bg-gray-100 opacity-60" style={{borderRadius: 20}}>

                        <Text className="font-bold text-xl left-2 text-gray-900">Justificación</Text>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-900 right-3 justify-between text-justify">La regresión logística nos puede resultar útil  
                            <View>
                            <Text className='h-1'></Text>
                            <Text>para los casos:</Text>
                            </View>
                            <View>
                              <Text className='h-3'></Text>
                              <Text className="text-gray-900 justify-between text-justify">Cuando se desea predecir la presencia o ausencia de una característica o resultado según los valores de un conjunto de predictores. </Text>
                            </View>
                            <View>
                              <Text className='h-2'></Text>
                              <Text className="text-gray-900 justify-between text-justify">Los coeficientes de regresión logística pueden utilizarse para estimar la razón de probabilidad de cada variable independiente del modelo. </Text>
                            </View>
                            <View>
                              <Text className='h-2'></Text>
                              <Text className="text-gray-900 justify-between text-justify">La regresión logística se puede aplicar a un rango más amplio de situaciones de investigación que el análisis discriminante.</Text>
                            </View>
                            </Text>
                        </View>
                        <Text className='h-0.5'></Text>
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
                  <View className="flex-column space-x-6 p-2 right-2 mx-2 space-y-2 bg-gray-100 opacity-60" style={{borderRadius: 20}}>
                    <Text className="font-bold text-xl left-2 text-gray-900">0.7901234567901234</Text>
                  </View>
                </View>
                {/* Matriz de Confusión */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">Matriz de Confusión</Text>
                  <Text className='h-3'></Text>
                  <Image 
                  source={ require('../assets/MC_LR.png') }
                  className="h-[345px] w-[345px]"
                  />
                </View>

                {/* ROC */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">ROC</Text>
                  <Text className='h-3'></Text>
                  <Image 
                  source={ require('../assets/ROC_LR.png') }
                  className="h-[250px] w-[345px]"
                  />
                </View>

                {/* AUC */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold  text-gray-300">AUC</Text>
                  <Text className='h-3'></Text>
                  <View className="flex-column flex-1 space-x-6 right-2 mx-2 p-2 space-y-3 bg-gray-100 opacity-60" style={{borderRadius: 20}}>
                    <Text className="font-bold text-xl left-2 text-gray-900">0.77</Text>
                  </View>
                </View>
                {/* Kaggle */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">Puntaje Obtenido en Kaggle</Text>
                  <Text className='h-3'></Text>
                  <Text className='h-5'></Text>
                  <View className="flex-column flex-1 space-x-6 p-2 right-2 mx-2 space-y-3 bg-gray-100 opacity-60" style={{borderRadius: 20}}>
                    <Text className="font-bold text-xl left-2 text-gray-900">0.75358</Text>
                  </View>
                  <Text className='h-5'></Text>
                  <Image 
                  source={ require('../assets/Kaggle_LR.png') }
                  className="h-[170px] w-[345px]"
                  />
                </View>

              </View>




          </View>

      </ScrollView>

    </SafeAreaView>
    
    </ImageBackground>
  )
}