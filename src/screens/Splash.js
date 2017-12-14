import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import {NavigationActions} from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#F5FCFF',
    },
    loadingText: {
        marginBottom: 5,
    },
    progress: {
        marginBottom: 15,
    }
});

const timeFrame = 200;


export default class Splash extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);

        this.state = {
            progress: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.progress === 1) {
                clearInterval(this.timer);
                setTimeout(() => {
                    let toHome = NavigationActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({routeName: 'Home'})],
                    });
                    this.props.navigation.dispatch(toHome);
                }, timeFrame);
            } else {
                let random = Math.random() * 0.5;
                let progress = this.state.progress + random;
                if (progress > 1) {
                    progress = 1;
                }
                this.setState({progress});
            }
        }, timeFrame);

    }

    render() {
        const width = Dimensions.get('window').width * 0.64;

        return <View style={styles.container}>
            <Text style={styles.loadingText}>Loading...</Text>
            <View style={styles.progress}>
                <Progress.Bar progress={this.state.progress} width={width} height={2}/>
            </View>
        </View>;
    }
}

Splash.navigationOptions = {
    title: 'Splash',
};
