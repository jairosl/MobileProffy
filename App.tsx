import React from 'react';
import Landing from './src/pages/Landing';
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function App() {

  let [fontsloaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  if(!fontsloaded) {
    return <AppLoading />
  }else {
    return (
      <>
        <Landing />
        <StatusBar style="light" />
      </>
    );
  }
}

