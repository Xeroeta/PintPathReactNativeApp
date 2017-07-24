import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

export default class PintPath extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('./assets/Northlandia-Map-No-POIs-No-Bubbles-v3.png')}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: './assets/POIs/calibrationdrawing.png'}}
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('PintPath', () => PintPath);