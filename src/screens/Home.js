import React from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        paddingTop: 35,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        height: 55
    },
    editor: {
        flex: 1,
    }
});

export default class Home extends React.Component{

    state = {
        text: 'ok'
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>
                        Welcome to React Native! 123
                    </Text>
                </View>
                <View style={styles.editor}>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Button title={'Bu'} onPress={e => this.onClick()}></Button>
                </View>
            </View>
        );
    }

    onClick() {
        Alert.alert(`Hello`)
    }
}

Home.navigationOptions = {
    title: 'Home',
};

