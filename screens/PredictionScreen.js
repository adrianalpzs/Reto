import { View, Text, ImageBackground, ScrollView, SafeAreaView, Image, TouchableOpacity, Button} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import {TextInput} from 'react-native-paper'
import { Formik } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'

export default function PredictionScreen() {
  const navigation = useNavigation();

  const [prediction, setPrediction] = useState('')
  const [selected, setSelected] = useState('')
  const [sex,setSex] = useState('')
  const [model,setModel] = useState('')

  const data=[
    {key:'0', value:'Mr.'},
    {key:'2', value:'Mrs.'},
    {key:'1', value:'Miss'},
    {key:'3', value:'Master'},
    {key:'4', value:'VIP'},
  ]

  const data_sex=[
    {key:'0', value:'Female'},
    {key:'1', value:'Male'},

  ]

  const datalink=[
    {key:'RF', value:'Random Forest'},
    {key:'LG', value:'Logistic Regression'},
  ]

  const linkdict = {
    'RF' : 'Random Forest',
    'LG' : 'Logistic Regression',
    '' : '(Select model required)'
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

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
          <Text className="font-bold text-center text-4xl text-white">{/*linkdict[model]*/} Prediction</Text>
          <Text className="text-xl text-center font-light text-gray-300">Try A Prediction</Text>
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

            {/* Formik */}
            <Formik initialValues = {{
              Sex: '',
              Title:'',
              Age: '',
              Fare: '',
              Relatives: ''
              }}
              //onSubmit={values => console.log(values)}
              onSubmit={values => 
                axios.post('http://192.168.1.239:19000/predict'+model,{
                  Sex: values.Sex,
                  Title: values.Title,
                  Age: values.Age,
                  Fare: values.Fare,
                  Relatives: values.Relatives,
                }).then(response => {setPrediction(response.data)}).catch(error => {console.log(error.response.data)})}

            >
              {({handleChange,handleBlur, handleSubmit, values})=> (
                <View>  
                  <View className ='flex-column items-justify space-y-2 mx-3 mb-6 right-1'>
                    <Text className='h-5'></Text>
                  <SelectList 
                      data={datalink} 
                      setSelected={setModel}
                      boxStyles={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                      dropdownTextStyles={{color:'rgba(255,255,255,0.9)'}}
                      boxTextSyles={{color:'red'}}
                      inputStyles={{color:'black'}}
                      placeholder='Choose model'
                      />
                      <Text className='h-3'></Text>
                  <SelectList 
                      data={data_sex} 
                      setSelected={setSex}
                      boxStyles={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                      dropdownTextStyles={{color:'rgba(255,255,255,0.9)'}}
                      boxTextSyles={{color:'red'}}
                      inputStyles={{color:'black'}}
                      placeholder='Choose gender'
                      onSelect={()=>{values.Sex = sex}}
                      />
                      <Text className='h-3'></Text>
                    <SelectList 
                      data={data} 
                      setSelected={setSelected}
                      boxStyles={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                      dropdownTextStyles={{color:'rgba(255,255,255,0.9)'}}
                      boxTextSyles={{color:'red'}}
                      inputStyles={{color:'black'}}
                      placeholder='Choose title'
                      onSelect={()=>{values.Title = selected}}
                      />
                  </View>
                  <Text className='h-4'></Text>

                  <View className='flex-column items-justify space-y-1 mx-3 mb-6 right-1'>
                    <TextInput className='bg-white opacity-50 rounded-xl'
                      onChangeText = {handleChange('Age')}
                      onBlur={handleBlur('Age')}
                      value = {values.Age}
                      placeholder = 'Age'
                      placeholderTextColor={'gray'}
                      theme={{colors:{text:'black'}}}
                    />
                    <Text className='h-3'></Text>
                    <TextInput className='bg-white opacity-50 rounded-xl'
                      onChangeText = {handleChange('Fare')}
                      onBlur={handleBlur('Fare')}
                      value = {values.Fare}
                      placeholder = 'Fare'
                      placeholderTextColor={'gray'}
                      theme={{colors:{text:'black'}}}
                    />
                    <Text className='h-3'></Text>
                    <TextInput className='bg-white opacity-50 rounded-xl'
                      onChangeText = {handleChange('Relatives')}
                      onBlur={handleBlur('Relatives')}
                      value = {values.Relatives}
                      placeholder = 'Relatives'
                      placeholderTextColor={'gray'}
                      theme={{colors:{text:'black'}}}
                    />
                  </View>
                  <Button onPress={handleSubmit} title='Submit' color={'white'} />


                  <Text className='text-xl text-white font-bold'>{prediction}</Text>
                </View>
              ) }
            </Formik> 





          </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  )
}