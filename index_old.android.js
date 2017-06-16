import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,

} from 'react-native';
import MapView from 'react-native-maps';
import flagPinkImg from './assets/flag-pink.png';
import flagBlueImg from './assets/flag-blue.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 39.1462;
const LONGITUDE = -94.5684;
// const LATITUDE_DELTA = 0.0922;
const LATITUDE_DELTA = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

export default class PintPath extends React.Component {
  constructor(props) {
    super(props);

    this.point1 = {
        latitude: 39.143561,
        longitude: -94.568408
    }
    
    this.point2 = {
        latitude: 39.144227,
        longitude: -94.565146
    }
    
    this.point3 = {
        latitude: 39.142763,
        longitude: -94.567378
    }
    
    this.point4 = {
        latitude: 39.144094,
        longitude: -94.565404
    }
    
    this.point5 = {
        latitude: 39.144427,
        longitude: -94.563944
    }
    
    this.point6 = {
        latitude: 39.146224,
        longitude: -94.564974
    }
    
    this.point7 = {
        latitude: 39.145026,
        longitude: -94.569523
    }
    
    this.point8 = {
        latitude: 39.141764,
        longitude: -94.574330
    }
    
    this.point9 = {
        latitude: 39.141232,
        longitude: -94.570210
    }

    this.point10 = {
        latitude: 39.139900,
        longitude: -94.568236
    }

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
      {
        key: "1",
        coordinate: this.point1
      },
      {
        key: "2",
        coordinate: this.point2
      },
      {
        key: "3",
        coordinate: this.point3
      },
      {
        key: "4",
        coordinate: this.point4
      },
      {
        key: "5",
        coordinate: this.point5
      },
      {
        key: "6",
        coordinate: this.point6
      },
      {
        key: "7",
        coordinate: this.point3
      },
      {
        key: "8",
        coordinate: this.point4
      },
      {
        key: "9",
        coordinate: this.point5
      },
      {
        key: "10",
        coordinate: this.point6
      }
      ],
    };

    this.onMapPress = this.onMapPress.bind(this);
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: `foo${id++}`,
        },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={this.onMapPress}
        >
          
          {this.state.markers.map(marker => (
            <MapView.Marker
              title={marker.key}
              image={flagBlueImg}
              key={marker.key}
              coordinate={marker.coordinate}
            />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
            <Text>Tap to create a marker of random color</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// CustomMarkers.propTypes = {
//   provider: MapView.ProviderPropType,
// };

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});


AppRegistry.registerComponent('PintPath', () => PintPath);
