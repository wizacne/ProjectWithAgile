import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/BeginTabs/Login'
import Register from './screens/BeginTabs/Register'
import AddNew from './screens/MainTabs/AddNew'
import BottomTabs from './screens/MainTabs/BottomTabs'
import Chart from './screens/MainTabs/Chart'
import History from './screens/MainTabs/History'
import Home from './screens/MainTabs/Home'

import Setting from './screens/MainTabs/Setting'
import Profile from './screens/MainTabs/Profile'
import Test from './screens/TestTab/TestPicker'
import ItemTransaction from './component/ItemTransaction'
import ItemCollect from './component/ItemCollect'
import ChangePassword from './screens/BeginTabs/ChangePassword';




const Stack = createNativeStackNavigator();
const StackBegin = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="StackBegin" component={StackBegin} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="ItemCollect" component={ItemCollect} />
        <Stack.Screen name="AddNew" component={AddNew} />
        <Stack.Screen name="Test" component={Test} />


        

      </Stack.Navigator>
    </NavigationContainer>
     // son yeu milo
  )
}

export default Login

