import React from 'react';

import {
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';
import {Platform, StyleSheet, View, Text, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
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

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native!
            </Text>

            <View>
                <Button style={styles.button} title={'Bu'} onPress={e=>e}></Button>
            </View>
        </View>
    );
}

Home.navigationOptions = {
    title: 'Home',
};

