import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
  Image, Button, TextInput,
  Alert, ScrollView, FlatList, SectionList,
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
            onPress={() => { Alert.alert('mediahardcore.com'); }} title="About Me"
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
          <Text style={{ marginBottom: 10, fontSize: 20 }}>Best Music Gendre on Earth</Text>
          <FlatList
            data={[
              { key: 'Punk' },
              { key: 'Hardcore' },
              { key: 'Melodic Punk' },
              { key: 'MetalCore' },
              { key: 'Grincore' },
            ]}
            renderItem={({ item }) => <Text style={{ fontSize: 15, padding: 5, }}>{item.key}</Text>}
          />

          <Text style={{ marginBottom: 10, fontSize: 20 }}>Best Hardcore Band on Earth</Text>

          <SectionList
            sections={[
              { title: 'A', data: ['Agent Orange', 'Agnostic Front'] },
              { title: 'B', data: ['Bad Brains', 'Bane', 'Black Flag', 'Beastie Boys'] },
              { title: 'C', data: ['CIV'] },
              { title: 'D', data: ['DOA'] },
              { title: 'E', data: ['Earth Crisis'] },
              { title: 'F', data: ['Fugazi'] },
              { title: 'G', data: ['Gorilla Biscuits'] },
              { title: 'H', data: ['H2O'] },
              { title: 'I', data: ['In My Eyes'] },
              { title: 'J', data: ['JFA'] },
              { title: 'K', data: ['Kill Your Idols'] },
              { title: 'M', data: ['Minor Threat'] },
              { title: 'T', data: ['Terror'] },
            ]}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <Text style={{ marginBottom: 10, fontSize: 15 }}>{item}</Text>}
            renderSectionHeader={({ section }) => <Text style={{fontSize: 20 }}>{section.title}</Text>}
          />

        </View>
      </ScrollView>
    );
  }
}

// contoh props 2
class Name extends Component {
  render() {
    return (
      <Text>The Band :  {this.props.name}</Text>
    )
  }
}

const styles = StyleSheet.create({
  containerScroll: {
    paddingTop: 50,
    height: 1500,
    backgroundColor: 'pink',

  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
