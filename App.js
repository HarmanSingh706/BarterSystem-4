import React from 'react'
import SignUpLoginScreen from './screens/SignUpLoginScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/HomeScreen'
import ExchangeScreen from './screens/ExchangeScreen'
import {StyleSheet,Image} from 'react-native'

export default function App(){
      return(
     <SafeAreaProvider>
     <AppContainer/>
     </SafeAreaProvider>
    )
  }


  const TabNavigator = createBottomTabNavigator({
    HomeScreen: HomeScreen,
    ExchangeScreen: ExchangeScreen
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "HomeScreen"){
          return(
            <Image
            source={require("./assets/splash.png")}
            style={{width:40, height:40}}
          />
          )
  
        }
        else if(routeName === "WhatIsMun"){
          return(
            <Image
            source={require("./assets/handshake.png")}
            style={{width:40, height:40}}
          />)
  
        }
      }
    })
  })
  
  const SwitchNavigator = createSwitchNavigator({
    SignUpLoginScreen : SignUpLoginScreen,
    TabNavigator : TabNavigator
  })
  
  const AppContainer = createAppContainer(SwitchNavigator);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });