import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {

    // contoh props 1
    let pic = {
      uri: 'https://bloximages.newyork1.vip.townnews.com/thesuburban.com/content/tncms/assets/v3/editorial/b/1c/b1c50de4-6a97-11e8-b5db-37ed72466eb6/5b19a0390b4bc.image.jpg?resize=400%2C228'
    }

    return (
      <View style={styles.container}>
        <Text>Get The Shoot - Hardcore SXE </Text>
        <Image source={pic} style={{ height: 200, width: 250 }} />
        <Name name="STRAIGHT EDGE"></Name>
      </View>
    );
  }
}

// contoh props 2
class Name extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
