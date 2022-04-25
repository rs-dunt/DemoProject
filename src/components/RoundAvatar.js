import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function RoundAvatar() {
    return <View style={styles.container}>
        <Image
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
            }}
            style={styles.image}
        />
        <Text>text</Text>
    </View>;
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        margin: 4
    },
});


