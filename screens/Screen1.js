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
          <Text className="text-xl text-center font-light text-gray-300">Random Forest</Text>
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
                    <View className="flex-column flex-1 space-x-6 p-2 space-y-3 bg-gray-100 opacity-60" style={{borderRadius: 20}}>

                        <Text className="font-bold text-xl left-2 text-gray-900">Justificación</Text>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-900 right-3 text-justify">Flexibilidad: dado que random forest puede realizar tareas de regresión y clasificación con un alto grado de precisión, también una herramienta eficaz para estimar los valores faltantes, ya que mantiene la precisión cuando falta una parte de los datos.
                              Requieren poco ajuste, por lo cual es muy sencillo de usar “inmediatamente”
                              No existe sobreajuste
                              No se necesita una validación adicional debido a que ya esta incorporado.
                              
                            </Text>
                        </View>
                        <Text className='h-0.5'> </Text>
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

                  <View className="flex-column flex-1 space-x-6 right-2 mx-2 p-2 space-y-3 bg-gray-100 opacity-60" style={{borderRadius: 20}}>
                    <Text className="font-bold text-xl left-2 text-gray-900">0.8395061728395061</Text>
                  </View>

                </View>
                {/* Matriz de Confusión */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">Matriz de Confusión</Text>
                  <Text className='h-3'></Text>
                  <Image 
                  source={ require('../assets/MC_RF.png') }
                  className="h-[345px] w-[345px]"
                  />
                </View>

                {/* ROC */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">ROC</Text>
                  <Text className='h-3'></Text>
                  <Image 
                  source={ require('../assets/ROC_RF.png') }
                  className="h-[250px] w-[345px]"
                  />
                </View>

                {/* AUC */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">AUC</Text>
                  <Text className='h-3'></Text>
                  <View className="flex-column flex-1 space-x-6 p-2 right-2 mx-2 space-y-3 bg-gray-100 opacity-60" style={{borderRadius: 20}}>
                    <Text className="font-bold text-xl left-2 text-gray-900">0.82</Text>
                  </View>
                </View>
                {/* Kaggle */}
                <View>
                  <Text className='h-10'></Text>
                  <Text className="text-xl font-semibold text-gray-300">Puntaje Obtenido en Kaggle</Text>
                  <Text className='h-5'></Text>
                  <View className="flex-column flex-1 space-x-6 right-2 mx-2 p-2 space-y-3 bg-gray-100 opacity-60" style={{borderRadius: 20}}>
                    <Text className="font-bold text-xl left-2 text-gray-900">0.77751</Text>
                  </View>
                  <Text className='h-5'></Text>
                  <Image 
                  source={ require('../assets/Kaggle_RF.png') }
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