import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableNativeFeedback,
  Alert,
  TextInput,
  Picker,
  KeyboardAvoidingView
} from 'react-native';
import { Card } from 'react-native-elements';
import { Constants, MapView, Google } from 'expo';
import { postRequest } from './fetch';

export default class Home extends Component {
  state = {
    requestedBy: '',
    requestFor: 'B+',
    hospitalAddress: '',
    hospitalName: '',
    doing: false,
    number: '',
    name: '',
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Card title="Blood Request Form">

          <View>

            <View style={styles.column}>
              <Text style={styles.label}>Blood Required : </Text>
              <View style={styles.picker}>
                <Picker
                  mode="dropdown"
                  selectedValue={this.state.blood}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ requestFor: itemValue })}>
                  <Picker.Item label="A+" value="A+" />
                  <Picker.Item label="A-" value="A-" />
                  <Picker.Item label="B+" value="B+" />
                  <Picker.Item label="B-" value="B-" />
                  <Picker.Item label="AB+" value="AB+" />
                  <Picker.Item label="AB-" value="AB-" />
                  <Picker.Item label="O+" value="O+" />
                  <Picker.Item label="O-" value="O-" />
                </Picker>
              </View>
            </View>

            <View style={styles.column}>
              <Text style={styles.label}>Your Name: </Text>
              <TextInput
                onChangeText={text => {
                  this.setState({ name: text });
                }}
              />
            </View>

            <View style={styles.column}>
              <Text style={styles.label}>Hospital Name : </Text>
              <TextInput
                onChangeText={text => {
                  this.setState({ hospitalName: text });
                }}
              />
            </View>

            <View>
              <Text style={styles.label}>Hospital Address </Text>
              <TextInput
                onChangeText={text => {
                  this.setState({ hospitalAddress: text });
                }}
              />
            </View>

            <View style={styles.column}>
              <Text style={styles.label}>Contact Number : </Text>
              <TextInput
                onChangeText={text => {
                  this.setState({ number: text });
                }}
              />
            </View>

            <View style={styles.row}>
              <View style={styles.button}>

                <Button
                  disabled={this.state.doing}
                  title="Post this request"
                  onPress={() => {
                    this.setState({ doing: true });
                    postRequest([
                      { key: 'requestFor', value: this.state.requestFor },
                      {
                        key: 'hospitalAddress',
                        value: this.state.hospitalAddress,
                      },
                      { key: 'hospitalName', value: this.state.hospitalName },
                      { key: 'requestedBy', value: this.state.name },
                      { key: 'number', value: this.state.number },
                    ]).then(response => {
                      console.log(response);
                      this.setState({ doing: false })
                      Alert.alert('Successfully posted');
                      this.props.navigation.navigate('Home');
                    });
                  }}
                />

              </View>
            </View>

          </View>
        </Card>
       
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  row: {
    padding: 25,
    flexDirection: 'row',
  },
  column: {},
  label: {
    color: '#111',
    fontWeight: '400',
    fontSize: 18,
  },
  picker: {
    padding: 10,
  },
});
