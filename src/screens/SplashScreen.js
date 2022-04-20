import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { View, Text, StyleSheet } from 'react-native'
import LoginScreen from '../screens/LoginScreen'
export default function SplashScreen({ navigation }) {
    // const { navigate } = this.props.navigation;
    // setTimeout(() => {
    //     navigate('Login');
    // }, 5000);
    // function MyPresentScreen({ navigation }, props) {
    //     setTimeout(() => {
    //         navigation.navigate('LoginScreen');
    //     }, 2500);
    //     return (
    //         <Text>My Present Screen that I will navigate from after some seconds</Text>
    //     )
    // };
    const { navigate } = navigation;
    setTimeout(() => {
        navigate('LoginScreen'); 
    }, 1000);
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.buttonText}>form FACEBOOK</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 22,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: 'black',
        backgroundColor: 'transparent',
    },
})