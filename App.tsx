import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts,Jost_600SemiBold, Jost_400Regular} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'

import Welcome from './src/pages/Welcome'

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_600SemiBold, Jost_400Regular
  })

  if (!fontsLoaded) {
    return (
      <AppLoading/>
    )
  }
  return (
    <>
      <Welcome/>
      
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
