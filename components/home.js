import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,Button,TouchableNativeFeedback } from 'react-native';
import {Card} from 'react-native-elements';
import {Constants} from 'expo';
export default class Home extends Component {
  
  _requestButtonPressed(){
    
  }
  
  _donateButtonPressed(){
    
  }
  
  
  render() {
    return (
    
     <View style={styles.container}>
      <Card title="Choose your options">
      <View>
        <View style={styles.button}>
          <Button title='Request Blood' style={styles.button} onPress={()=>{this.props.navigation.navigate('Request Blood Form')}} />
        </View>
        <View style={styles.button}>
          <Button title='Donate Blood' style={styles.button} onPress={()=>{this.props.navigation.navigate('BloodRequests')}} />
        </View>
      </View>
      </Card>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
 button:{
  padding:20,
 },
});
