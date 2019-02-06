/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {Header} from './components/common';
import LibaryList from './components/LibraryList';
import reducers from './reducers';

const App = ()=>{
  return(
    <Provider store = {createStore(reducers)}>
        <View style = {styles.container}>
        <Header headerText = 'Tech Stack'/>
        <LibaryList />
        </View>
    </Provider>
    
  );
}

export default App;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  }
})
