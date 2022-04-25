import React from 'react';
import TextInstagram from '../components/TextInstagram';
import Button from '../components/Button';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import RoundAvatar from '../components/RoundAvatar';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.column}>
                <View style={styles.header}>
                    <TextInstagram />

                </View>
                <View style={styles.avatar}>
                    <RoundAvatar />
                    <RoundAvatar />
                    <RoundAvatar />
                    <RoundAvatar />
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    column: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'stretch',
        // justifyContent: 'space-between',
    },
    avatar: {
        // flex: 1,
        flexDirection: 'row',
        // alignItems: 'stretch',
        // justifyContent: 'flex-start',
    },
});
