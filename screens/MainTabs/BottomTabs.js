import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ICON, COLOR } from '../../constants/Themes'
import * as Animatable from 'react-native-animatable';

import Home from './Home'
import AddNew from './AddNew'
import Profile from './Profile'
import Setting from './Setting'
import Chart from './Chart'
import History from './History';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const StackHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  )
}
const StackHistory = () => {
  return (
    <Stack.Navigator initialRouteName="History" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="History" component={History} />

    </Stack.Navigator>
  )
}

const StackAddNew = () => {
  return (
    <Stack.Navigator initialRouteName="AddNew" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddNew" component={AddNew} />

    </Stack.Navigator>
  )
}

const StackChart = () => {
  return (
    <Stack.Navigator initialRouteName="Chart" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chart" component={Chart} />

    </Stack.Navigator>
  )
}
const StackSetting = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />


    </Stack.Navigator>
  )
}

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackHome"
      // tabBarOptions={{
      //   tabBarShowLabel: false,
      //   style: {
      //     borderTopLeftRadius: 20,
      //     borderTopRightRadius: 20,
      //     backgroundColor: '#FFFFFF',
      //     shadowColor: '#000000',
      //     shadowOffset: {
      //       width: 0,
      //       height: 2,
      //     },
      //     shadowOpacity: 0.25,
      //     shadowRadius: 3.84,
      //     elevation: 5,
      //   },
      //   labelStyle: {
      //     fontSize: 14,
      //     fontWeight: 'bold',
      //   },
      //   activeTintColor: '#FF6347',
      //   inactiveTintColor: '#A9A9A9',
      // }}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, label, size }) => {

            let iconName = focused
            if (route.name === 'StackHome') {
              iconName = focused ? ICON.home : ICON.home
              label = 'Home'
            } else if (route.name === 'StackHistory') {
              iconName = focused ? ICON.history : ICON.history;
              label = 'History'
            } else if (route.name === 'StackAddNew') {
              iconName = focused ? ICON.plus : ICON.plus;
              label = 'New'
            }
            else if (route.name === 'StackChart') {
              iconName = focused ? ICON.chart : ICON.chart;
              label = 'Chart'
            }
            else if (route.name === 'StackSetting') {
              iconName = focused ? ICON.setting : ICON.setting;
              label = 'Setting'
            }
            // You can return any component that you like here!
            return <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              width: 60
            }}>

              <Animatable.View
                animation="zoomIn"
                duration={2000}>
                <Image source={iconName}
                  style={{
                    width: focused ? 37 : 27,
                    height: focused ? 37 : 27,

                    resizeMode: 'stretch',
                    tintColor: focused ? COLOR.primary : COLOR.primary
                  }} />
              </Animatable.View>
              <Text style={{
                fontSize: focused ? 14 : 0,
                marginTop: 4,
                color: focused ? COLOR.primary : COLOR.primary,

              }}>{label}</Text>
            </View>;
          },

          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 70,
            position: 'absolute',
           
            backgroundColor: COLOR.background,

          },
        })}


    >
      <Tab.Screen name="StackHome" component={StackHome} />
      <Tab.Screen name="StackHistory" component={StackHistory} />
      <Tab.Screen name="StackAddNew" component={StackAddNew} />
      <Tab.Screen name="StackChart" component={StackChart} />
      <Tab.Screen name="StackSetting" component={StackSetting} />

    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})