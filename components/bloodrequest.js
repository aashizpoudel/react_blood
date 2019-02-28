import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,Button,TouchableNativeFeedback,Alert,ActivityIndicator,TextInput,KeyboardAvoidingView } from 'react-native';
import {Card} from 'react-native-elements';
import { Constants, MapView } from 'expo';
import Dialog from "react-native-dialog";
import {postMail} from './fetch';
 


export default class Home extends Component {
  
  constructor(props){
    super(props);
    this.props.payload = this.props.navigation.state.params.payload;
    this.state = {accepted: false,loading:true,promptVisible:false,myNumber:'',myName:''};
    console.log(this.props.payload);
  }

  _acceptButtonPressed(){
    this.setState({accepted
      :true
    });
      postMail({myNumber:this.state.myNumber,myName:this.state.myName,numberToSend:this.props.payload.number} ).then((response)=>{console.log(response);
        Alert.alert('Successfully Notified!!');this.props.navigation.navigate('Home');
      });
    
    
//     Alert.alert(
//   'Confirmation',
//   'Do you want to accept the request? The requester would receive an alert with your phone number and will contact you soon.',
//   [
//     {text: 'Yes', onPress: () => this.setState({accepted:true})},
//     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//   ],
//   { cancelable: false }
// )

  }

  _donateButtonPressed(){
    
  }


  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };


  render() {
    return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
    
      <Card title="Request Details">
      <View>
      
        <View style={styles.row}>
          <Text style={styles.label}>Request For : </Text>
          <Text> {this.props.payload.requestFor} </Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Requested By : </Text>
          <Text> {this.props.payload.requestedBy}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label} >Hospital: </Text>
          <Text> {this.props.payload.hospitalName} {this.props.hospitalAddress} </Text>
        </View>
        
      
              
        <View style={[styles.row,{justifyContent:'center'}]}>
            <Card title="Want to donate blood to this request?">
            <View>
            
              <Text>Enter your Number</Text>
              <TextInput onChangeText={(text)=>{this.setState({myNumber:text}) }} keyboardType='phone-pad' style={styles.textInput}/>
            
              
              <Text>Enter your Name</Text>
              <TextInput onChangeText={(text)=>{this.setState({myName:text}) }} style={styles.textInput}/>
              <View style={styles.button}>
                <Button title='Accept and Ping' disabled={this.state.accepted} onPress={()=>{this._acceptButtonPressed()}} />
              </View>
             
              
            </View>
            </Card>
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
    backgroundColor: '#ecf0f1',
  },
  row:{
    padding:10,
    flexDirection:'row',
    alignItems:'baseline',
  },
  label:{
    color:'#111',
    fontWeight:'400',
    fontSize:15,
  },
  button:{
    padding:10,
  },
  textInput:{
    padding:10,
  }

});
