/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import {
    StackNavigator,
} from 'react-navigation';

import routes from './routes';

const NoteAppRoute = StackNavigator(routes, {
    headerMode: 'none',
});

export default () => <NoteAppRoute/>;
