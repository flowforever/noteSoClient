import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default function Splash() {
    return <View style={styles.container}>
        <Text style={styles.welcome}> Loading </Text>
        <Progress.Bar progress={0.3} width={200} />
    </View>;
}

Splash.navigationOptions = {
    title: 'Splash',
};
