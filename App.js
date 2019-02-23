import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
  Image, Button, TextInput,
  Alert, ScrollView
} from 'react-native';

export default class App extends React.Component {

  // contoh state
  state = {
    count: 0,
    text: ""
  }

  render() {
    // contoh props 1
    let pic = {
      uri: 'https://bloximages.newyork1.vip.townnews.com/thesuburban.com/content/tncms/assets/v3/editorial/b/1c/b1c50de4-6a97-11e8-b5db-37ed72466eb6/5b19a0390b4bc.image.jpg?resize=400%2C228'
    }

    return (
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          <Button
            onPress={() => { Alert.alert('mediasuporthardcoreband.com'); }} title="About Me"
          />
          <Text style={{ marginBottom: 10, }}>Best Hardcore Band </Text>

          <Image source={pic} style={{ height: 200, width: 250, marginBottom: 10, borderRadius: 10, }} />
          <Name name="Get The Shot"></Name>
          <Text style={{ marginTop: 10, }}>How Much Value Is This For The Band ? </Text>

          <Button title="+" onPress={() => this.setState({ count: this.state.count + 1 })} />
          <Text >{this.state.count}</Text>
          <Button title="-" onPress={() => this.setState({ count: this.state.count - 1 })} />

          <Text style={{ marginBottom: 10, }}>What is Your Favorite Hardcore Band ?</Text>
          <TextInput
            onChangeText={(text) => this.setState({ text })}
            placeholder='Your Band'
            style={{
              height: 40,
              width: 200,
              borderColor: 'pnik',
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
          <Text>{this.state.text}</Text>
        </View>
      </ScrollView>
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
  containerScroll: {
    flex: 1,
  },
  container: {
    height: 850,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
