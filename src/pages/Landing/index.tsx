import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import givClassesIcon from '../../assets/images/icons/give-classes.png';
import heartPurpleIcon from '../../assets/images/icons/heart.png'

import api from '../../services/api';

const Landing: React.FC = () => {

  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
  <View style={styles.container}>
    <Image source={landingImg} style={styles.banner}/>
    <Text style={styles.title}>
      Seja bem-vindo, {'\n'}
      <Text style={styles.titleBold}>O que deseja fazer ?</Text>
    </Text>

    <View style={styles.buttonsContainer}>
      <RectButton 
        style={[styles.button, styles.buttonPrimary]}
        onPress={handleNavigateToStudyPages}
      >
        <Image source={studyIcon}/>
        <Text style={styles.buttonText}>Estudar</Text>
      </RectButton>

      <RectButton 
        style={[styles.button, styles.buttonSecondary]}
        onPress={handleNavigateToGiveClassesPage}
      >
        <Image source={givClassesIcon}/>
        <Text style={styles.buttonText}>Dar aulas</Text>
      </RectButton>
    </View>

    <Text style={styles.totalConnections}>
      Toal de {totalConnections} conexões já realizadas {' '}
      <Image source={heartPurpleIcon}/>
    </Text>

  </View>
  );
}

export default Landing;