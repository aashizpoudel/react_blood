import React, {Component} from 'react';
import {View,Text,TouchableNativeFeedback} from 'react-native';

export default class ListItem extends Component{
  render(){
    return <TouchableNativeFeedback onPress={()=>{this.props.onPress()}}>
      <View>
      <Text>Blood request for {this.props.item.requestFor} blood</Text>
      <Text>address {this.props.item.address} address </Text>
      <Text>time {this.props.item.postedOn} postedon </Text>
      </View>
    </TouchableNativeFeedback>;
  }
}