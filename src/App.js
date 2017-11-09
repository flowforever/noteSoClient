/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Button, Text} from 'native-base';

const instructions = Platform.select({
    ios: 'You are using ios',
    android: 'You are using android',
});

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        justifyContent: 'center'
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

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>

                <View>
                    <Button style={styles.button}>
                        <Text>
                            Button 2
                        </Text>
                    </Button>
                </View>
            </View>
        );
    }
};

