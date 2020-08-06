import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {

  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={giveClassesBgImage} 
        style={styles.content}
        resizeMode='contain'
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, 
          você precisa se cadastra  como professor na nosssa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton 
        style={styles.okButton}
        onPress={handleNavigateBack}
      >
        <Text style={styles.okButtonText}>Tudo Bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;