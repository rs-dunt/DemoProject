import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function TextInstagram() {
  return <Image source={require('../assets/text_instagram.png')} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 40,
  },
});
