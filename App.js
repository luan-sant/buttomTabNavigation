import React from 'react'
import {StatusBar} from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import AddScreen from './src/screens/AddScreen'
import Search from './src/screens/Search'
import Config from './src/screens/Config'

import {styles} from './src/Global'

export default function App() {
  const Tab = createBottomTabNavigator ();
  return (
  <>
    <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
    />
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, colour}) =>{
          let iconName;
          if (route.name === "Inicio"){
            iconName = focused ? "ios-home" : 'ios-home-outline'
          } else if (route.name === "Pesquisar"){
            iconName = focused ? "ios-search" : 'ios-search-outline'
          } else if (route.name === "Adicionar"){
            iconName = focused ? "ios-add-circle" : 'ios-add-circle-outline'
          } else if (route.name === "Perfil"){
            iconName = focused ? "person-circle-sharp" : 'person-circle-outline'
          } else if (route.name === "Configuração"){
            iconName = focused ? "cog" : 'cog-outline'
          }
  
        return <Ionic name={iconName} size ={size} colour={colour} />
      },
      })}
  
      >
        <Tab.Screen name="Inicio" component={Home}/>
        <Tab.Screen name="Pesquisar" component={Search}/>
        <Tab.Screen name="Adicionar" component={AddScreen}/>
        <Tab.Screen name="Perfil" component={Profile}/>
        <Tab.Screen name="Configuração" component={Config}/>
      </Tab.Navigator>
    </NavigationContainer>

  </>
  )
}