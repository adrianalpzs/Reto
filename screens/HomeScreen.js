import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import { ArrowLeftIcon, PresentationChartLineIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();


    return (
        <SafeAreaView className="bg-blue">
            {/* Header */}
            <View className="flex-column space-x-2 mx-4 mb-4 p-2">
                
                <Text className="font-bold text-xl text-gray-700">Integrantes</Text>
                <Text></Text>


                <View className="flex-row items-center space-x-14">
                    <View className='flex-column w-20'>
                    {/* Yo */}
                    
                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-500 font-bold w-13 text-center">Adriana Inés López Sánchez</Text>
                        </View>
                        <Text></Text>
                        <Image 
                            source={ require('../assets/adriana.jpg') }
                            className="h-[80px] w-[80px] bg-gray-300 p-4 rounded-full"/>
                    </View>
                    

                    {/* Paola */}
                    <View className='flex-column w-20'>

                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-500 font-bold w-13 text-center">Lidia Paola Díaz Ramírez</Text>
                        </View>
                        <Text></Text>
                        <Image 
                            source={ require('../assets/paola.jpg') }
                            className="h-[80px] w-[80px] bg-gray-300 p-4 rounded-full"/>
                    </View>


                    {/* Majo */}
                    <View className='flex-column w-20'>
                        <View className="flex-row items-center justify-center">
                            <Text className="text-gray-500 font-bold w-13 text-center">María José Mendoza Muñiz </Text>
                        </View>
                        <Text></Text>
                        <Image 
                            source={ require('../assets/adri.jpg') }
                            className="h-[80px] w-[80px] bg-gray-300 p-4 rounded-full"/>
                    </View>

                </View>
            </View>


             {/* Descripción */}
            <View className="flex-row items-center space-x-2 mx-4 mb-4 ">
                <View className="flex-column flex-1 space-x-2 p-2 space-y-3 bg-gray-100" style={{borderRadius: 20}}>

                    <Text className="font-bold text-xl text-gray-700">Descripción del Problema</Text>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-gray-600">Aquí va la descripción</Text>
                    </View>
                  
                </View>
            </View>

            {/* Importancia */}
             <View className="flex-row items-center space-x-2 mx-4 mb-4">
                <View className="flex-column flex-1 space-x-2 space-y-3 p-2 bg-gray-100" style={{borderRadius: 20}}>

                <Text className="font-bold text-xl text-gray-700">Importancia Problema</Text>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-gray-600">Aquí va la importancia</Text>
                    </View>
                  
                </View>
            </View>


            {/* Pantallas de los resultados */}
            <Text></Text>
            <View className="flex-row items-center justify-center space-x-4 ">
                {/* Pantalla 1  - RESULTADOS 1ER ALGORITMO */}
                <View className=" flex-column w-40 items-center">
                    <View className="flex-row justify-center items-center">
                        <Text className="text-gray-600 text-center font-bold w-21">RESULTADOS 1º ALGORITMO</Text>
                    </View>
                    <TouchableOpacity 
                                onPress={() => navigation.navigate('Screen 1')}
                                className="absolute top-5 left-8 p-10">
                                <PresentationChartLineIcon size={20} color="gray" />
                    </TouchableOpacity>
                </View>


                {/* Pantalla 2  - RESULTADOS 2DO ALGORITMO*/}
                <View className=" flex-column w-40 items-center">
                    <View className="flex-row justify-center items-center">
                        <Text className="text-gray-600 text-center font-bold w-21">RESULTADOS 2º ALGORITMO</Text>
                    </View>
                    <TouchableOpacity 
                                onPress={() => navigation.navigate('Screen 2')}
                                className="absolute top-5 right-8 p-10">
                                <PresentationChartLineIcon size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            
            </View>


            



        </SafeAreaView>
    )
}