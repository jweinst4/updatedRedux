// fixed error message when first ran
// https://github.com/expo/expo/issues/4853

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';
import RepoList from './screens/RepoList';
import RepoDetail from './screens/RepoDetail';
import Profile from './screens/Profile';
import JonTester from './screens/JonTester';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const Tabs = TabNavigator({
  RepoList: {
    screen: RepoList
  },
  Profile: {
    screen: Profile
  },
  Tester: {
    screen: JonTester
  }
});

const Stack = StackNavigator({
  Home: {
    screen: Tabs
  },
  Detail: {
    screen: RepoDetail
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
