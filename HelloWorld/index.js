import React,{Component} from 'react';
import {AppRegistry,Text,StyleSheet,View} from 'react-native';

export default class HelloWorld extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#FFCC00'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
