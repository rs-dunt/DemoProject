import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function RoundAvatar() {
    return <Image
        source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
        }}
        style={{ width: 60, height: 60, borderRadius: 60 / 2, margin:4 }}
    />;
}


