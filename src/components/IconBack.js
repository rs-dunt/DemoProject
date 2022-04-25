import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function IconBack({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/back_button.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
  
    top: 0,
    left: 16,
  },
  image: {
    width: 35,
    height: 35,
  },
});
