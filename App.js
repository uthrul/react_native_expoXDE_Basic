import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {

  // contoh state
  state = {
    count: 0
  }

  render() {
    // contoh props 1
    let pic = {
      uri: 'https://bloximages.newyork1.vip.townnews.com/thesuburban.com/content/tncms/assets/v3/editorial/b/1c/b1c50de4-6a97-11e8-b5db-37ed72466eb6/5b19a0390b4bc.image.jpg?resize=400%2C228'
    }

    return (
      <View style={styles.container}>
      
        <Text>Best Hardcore Band </Text>
        <Image source={pic} style={{ height: 200, width: 250 }} />
        <Name name="Get The Shot"></Name>
        <Text>Kasih Nilai Yang Pantas Untuk band Ini</Text>

        <Button title="+" onPress={() => this.setState({ count: this.state.count + 1 })} />
        <Text>{this.state.count}</Text>
        <Button title="-" onPress={() => this.setState({ count: this.state.count - 1 })} />

      </View>
    );
  }
}

// contoh props 2
class Name extends Component {
  render() {
    return (
      <Text>Nama Band :  {this.props.name}</Text>
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
