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
  //const [model,setModel] = useState('')

  const data=[
    {key:'0', value:'0'},
    {key:'1', value:'1'},
    {key:'2', value:'2'},
    {key:'3', value:'3'},
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
          <Text className="font-bold text-center text-3xl text-white">Logistic Regression Prediction</Text>
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
                            <Text className="text-gray-900 text-justify right-1">Por temas de compatibilidad con anaconda, se optó
                            por el modelo de regresión logística. Sin embargo, el modelo de Random Forest obtuvo mayor precisión, pero no es 
                            una diferencia considerable comparada con este modelo.
                            </Text>
                        </View>
                        <Text className='h-0.5'></Text>
                    </View>
                    
              </View>

            {/* Formik */}
            <Formik initialValues = {{
              class: '',
              gender:'',
              age: '',
              siblings: '',
              parents: ''
              }}
              //onSubmit={values => console.log(values)}
              onSubmit={values => 
                {
                console.log(values.class)
                console.log(values.gender)
                console.log(values.age)
                console.log(values.siblings)
                console.log(values.parents)
                

                axios.post('http://192.168.1.239:5000/predict',{
                  //Sex: values.Sex == 'Female'?0:1,
                  class: values.class,
                  gender: values.gender,
                  age: values.age,
                  siblings: values.siblings,
                  parents: values.parents,
                
              }).then(response => {setPrediction(response.data==0?'Not Survived': 'Survived')}).catch(error => {console.log(error.response.data)})}   }

            >
              
              {({handleChange,handleBlur, handleSubmit, values})=> (
                <View>  
                  <View className ='flex-column items-justify space-y-2 mx-3 mb-6 right-1'>
                    <Text className='h-5'></Text>
                  {/* 
                  <SelectList 
                      
                      data={datalink} 
                      setSelected={setModel}
                      boxStyles={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                      dropdownTextStyles={{color:'rgba(255,255,255,0.9)'}}
                      dropdownStyles={{backgroundColor:'rgba(255,255,255,0.2)'}}
                      inputStyles={{color:'black'}}
                      placeholder='Model'
                      />
                      <Text className='h-3'></Text>
                    */}

                  <SelectList 
                      value={values.class}
                      data={data} 
                      setSelected={setSelected}
                      boxStyles={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                      dropdownTextStyles={{color:'rgba(255,255,255,0.9)'}}
                      dropdownStyles={{backgroundColor:'rgba(255,255,255,0.2)'}}
                      inputStyles={{color:'black'}}
                      placeholder='Class'
                      onSelect={()=>{values.class = selected}}
                      />
                      <Text className='h-3'></Text>
                    <SelectList 
                      value={values.gender}
                      data={data_sex} 
                      setSelected={setSex}
                      boxStyles={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                      dropdownTextStyles={{color:'rgba(255,255,255,0.9)'}}
                      dropdownStyles={{backgroundColor:'rgba(255,255,255,0.2)'}}
                      inputStyles={{color:'black'}}
                      placeholder='Gender'
                      onSelect={()=>{values.gender = sex}}
                      />
                  </View>
                  <Text className='h-4'></Text>

                  <View className='flex-column items-justify space-y-1 mx-3 mb-6 right-1'>
                    <TextInput className='bg-white opacity-50 rounded-xl'
                      onChangeText = {handleChange('age')}
                      onBlur={handleBlur('age')}
                      value = {values.age}
                      placeholder = 'age'
                      placeholderTextColor={'gray'}
                      theme={{colors:{text:'black'}}}
                    />
                    <Text className='h-3'></Text>
                    <TextInput className='bg-white opacity-50 rounded-xl'
                      onChangeText = {handleChange('siblings')}
                      onBlur={handleBlur('siblings')}
                      value = {values.siblings}
                      placeholder = 'siblings'
                      placeholderTextColor={'gray'}
                      theme={{colors:{text:'black'}}}
                    />
                    
                    <Text className='h-3'></Text>
                    <TextInput className='bg-white opacity-50 rounded-xl'
                      onChangeText = {handleChange('parents')}
                      onBlur={handleBlur('parents')}
                      value = {values.parents}
                      placeholder = 'parents'
                      placeholderTextColor={'gray'}
                      theme={{colors:{text:'black'}}}
                    />
                    
                  </View>
                  <Button onPress={handleSubmit} title='Submit' color={'white'} />

                  {/* Resultados */}
                <View>
                  <Text className='h-20'></Text>
                  <Text className="font-bold text-3xl text-white">Resultados</Text>
                  <Text className="h-10"></Text>
                  <View className=' bg-white rounded-2xl px-3 opacity-50'>
                    <Text className='h-3'></Text>
                    <Text className='text-xl text-center text-gray font-bold'>{prediction}</Text>
                    <Text className='h-3'></Text>
                  </View>
                  </View>
                  
                </View>
              ) }
            </Formik> 





          </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  )
}