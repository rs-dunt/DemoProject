import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
export default function SplashScreen({ navigation }) {
  const { navigate } = navigation;
  setTimeout(() => {
    navigate('LoginScreen');
  }, 1000);
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.buttonText}>form FACEBOOK</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'black',
    backgroundColor: 'transparent',
  },
});
