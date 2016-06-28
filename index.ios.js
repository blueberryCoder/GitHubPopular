/**
 * MostPopular
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Navigator,
  Text,
  View
} from 'react-native';
// import Drawer from 'react-native-drawer'
var DrawerLayout = require('react-native-drawer-layout')
var SettingPage=require('./SettingPage')
var MostPopular=require('./MostPopular')
var MostPopularInGitHub=React.createClass({
  _handleNavigationRequest: function() {
    // this.refs.nav.push(otherRoute);
    this.refs.nav;
  },
  render:function() {
    return (
      <DrawerLayout
        ref="drawer"
        drawerWidth={260}
        drawerPosition={DrawerLayout.positions.Left}
        renderNavigationView={() => <SettingPage />}
        >
        <NavigatorIOS
          ref="nav"
          style={styles.container}
          initialRoute={{
            title:`MostPopular`,
            component:MostPopular,
            passProps:{drawer:this}
          }}/>
      </DrawerLayout>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  text:{
    height:100,
    backgroundColor:'yellow',
  }
});
var drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

AppRegistry.registerComponent('MostPopularInGitHub', () => MostPopularInGitHub);
