import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput, ScrollView, ImageBackground} from 'react-native'
import { ArrowLeftIcon, CheckCircleIcon, ClockIcon, PresentationChartLineIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    
    return (
        <ImageBackground
            source={require('../assets/fondocc.jpg')}
            style={{width: '100%', height: '120%'}}
            > 
        <ScrollView>
            

            
            <SafeAreaView className="bg-blue">
                
                {/* Header */}
                <View className="flex-column space-x-2 mx-4 mb-4">
                    <Text className='h-5'></Text>
                    <Text className="font-bold text-2xl text-white">Integrantes</Text>
                    <Text className='h-5'></Text>


                    <View className="flex-row items-center space-x-14">
                        <View className='flex-column w-20'>
                        {/* Yo */}
                        
                            <View className="flex-row items-center justify-between">
                                <Text className="text-gray-200 font-bold w-13 text-center">Adriana Inés López Sánchez</Text>
                            </View>
                            <Text></Text>
                            <Image 
                                source={ require('../assets/adriana.jpg') }
                                className="h-[80px] w-[80px] bg-gray-300 p-4 rounded-full"/>
                        </View>
                        

                        {/* Paola */}
                        <View className='flex-column w-20'>

                            <View className="flex-row items-center justify-between">
                                <Text className="text-gray-200 font-bold w-13 text-center">Lidia Paola Díaz Ramírez</Text>
                            </View>
                            <Text></Text>
                            <Image 
                                source={ require('../assets/paola.jpg') }
                                className="h-[80px] w-[80px] bg-gray-300 p-4 rounded-full"/>
                        </View>


                        {/* Majo */}
                        <View className='flex-column w-20'>
                            <View className="flex-row items-center justify-center">
                                <Text className="text-gray-200 font-bold w-13 text-center">María José Mendoza Muñiz </Text>
                            </View>
                            <Text></Text>
                            <Image 
                                source={ require('../assets/majo.jpeg') }
                                className="h-[80px] w-[80px] bg-gray-300 p-4 rounded-full"/>
                        </View>

                    </View>
                </View>

                <Text className='p-3'></Text>
                {/* Descripción */}
                <View className="flex-row items-center space-x-2 mx-4 mb-4">
                    <View className="flex-column flex-1 space-x-2 p-2 space-y-3 bg-gray-100 opacity-60" style={{borderRadius: 20}}>

                        <Text className="font-bold text-xl text-gray-700">Descripción del Problema</Text>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-600">Aquí va la descripción</Text>
                        </View>
                    
                    </View>
                </View>
                <Text className='p-2'></Text>
                {/* Importancia */}
                <View className="flex-row items-center space-x-2 mx-4 mb-4">
                    <View className="flex-column flex-1 space-x-2 space-y-3 p-2 bg-gray-100 opacity-60" style={{borderRadius: 20, }}>

                    <Text className="font-bold text-xl text-gray-700">Importancia Problema</Text>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-gray-700">Aquí va la importancia</Text>
                        </View>
                    
                    </View>
                </View>


                {/* Pantallas de los resultados */}
                <Text className='p-5'></Text>
                <View className="flex-row items-center justify-center space-x-3 ">
                    {/* Pantalla 1  - RESULTADOS 1ER ALGORITMO */}
                    <View className=" flex-column w-40 items-center">
                        <View className="flex-row justify-center items-center">
                            <Text className="text-gray-200 text-center font-bold w-21">RESULTADOS 1º ALGORITMO</Text>
                        </View>
                        <TouchableOpacity 
                                    onPress={() => navigation.navigate('Screen 1')}
                                    className="absolute top-5 left-8 p-9">
                                    <PresentationChartLineIcon size={30} color="white" />
                        </TouchableOpacity>
                    </View>


                    {/* Pantalla 2  - RESULTADOS 2DO ALGORITMO*/}
                    <View className=" flex-column w-40 items-center">
                        <View className="flex-row justify-center items-center">
                            <Text className="text-gray-200 text-center font-bold w-21">RESULTADOS 2º ALGORITMO</Text>
                        </View>
                        <TouchableOpacity 
                                    onPress={() => navigation.navigate('Screen 2')}
                                    className="absolute top-5 right-8 p-9">
                                    <PresentationChartLineIcon size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                
                </View>


                {/* Selection y prediction */}
                <Text className='p-12'></Text>
                <View className="flex-row items-center justify-center space-x-3 ">
                    {/* Selection */}
                    <View className=" flex-column w-40 items-center">
                        <View className="flex-row justify-center items-center">
                            <Text className="text-gray-200 text-center font-bold w-21">SELECTION</Text>
                        </View>
                        <TouchableOpacity 
                                    onPress={() => navigation.navigate('Selection')}
                                    className="absolute top-2 left-8 p-9">
                                    <CheckCircleIcon size={30} color="white" />
                        </TouchableOpacity>
                    </View>


                    {/* Prediction*/}
                    <View className=" flex-column w-40 items-center">
                        <View className="flex-row justify-center items-center">
                            <Text className="text-gray-200 text-center font-bold w-21">PREDICTION</Text>
                        </View>
                        <TouchableOpacity 
                                    onPress={() => navigation.navigate('Prediction')}
                                    className="absolute top-2 right-8 p-9">
                                    <ClockIcon size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                
                </View>
            </SafeAreaView>
            
        </ScrollView>
        </ImageBackground>

    )
}
