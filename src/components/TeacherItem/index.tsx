import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: 'https://github.com/jairosl.png'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Jairo Soares de Lima</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>

      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, 
        placeat aspernatur et labore obcaecati laboriosam amet minus hic ducimus suscipit,
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'  '} 
          <Text style={styles.priceValue}>R$ 120,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon}/>  */}
            <Image source={unFavoriteIcon}/> 
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contado</Text>
          </RectButton>
        </View>
      </View>

    </View>
  );
}

export default TeacherItem;