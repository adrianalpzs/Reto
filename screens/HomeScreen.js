import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
//import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    //const navigation = useNavigation();


    return (
        <SafeAreaView className="bg-blue">
            {/* Header */}
            <View className="flex-row items-center mx-4 space-x-4 mb-4">
                
                <Image 
                    source={{uri: 'http://links.papareact.com/wru'}} 
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-xl">Integrantes</Text>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-red">abc</Text>
                    </View>
                </View>

                <View className="flex-1">
                    <Text className="font-bold text-xl">Descripción del Problema</Text>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-gray-400">abc</Text>
                    </View>
                </View>

                <View className="flex-1">
                    <Text className="font-bold text-xl">Importancia Problema</Text>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-gray-400">abc</Text>
                    </View>
                </View>



                <TouchableOpacity 
                    onPress={() => navigation.navigate('Screen1')}
                    className="mx-1 rounded-full">
                    <View className="p-1" >
                        
                    </View>
                </TouchableOpacity>

            </View>

             {/* EEEEE */}
            <View className="flex-row items-center space-x-2 mx-4 mb-4 ">
                <View className="flex-row flex-1 space-x-2 p-2 bg-gray-100" style={{borderRadius: 20}}>
                    <TextInput 
                        className="ml-4 mr-4 flex-1" 
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}