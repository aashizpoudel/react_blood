import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,Button,TouchableNativeFeedback,Alert,ScrollView ,FlatList,ActivityIndicator} from 'react-native';
import {Card} from 'react-native-elements';
import { Constants, MapView } from 'expo';
import {getRequests} from './fetch';

 
// Inside render()





export default class Home extends Component {
  
  
  
  state = {
    mapRegion: { latitude:87.2448646 , longitude:26.7974856 , longitudeDelta: 0.0421 },
    accepted:false,loading:true,
   data:[],
  };
  
  componentDidMount(){
    getRequests().then((res)=>{
      var keys = Object.keys(res);
      var arr = [];
      keys.map(l=>{
        let obj = {};
        obj.id = l ;
        obj = {...obj,...(res[l])};
        arr.push(obj);
      });
      this.setState({data:arr,loading:false});
      console.log(res);
    });
  }
  
  
  _renderItem(item){
    console.log("oite",item);
    return (
    <View>
    <TouchableNativeFeedback onPress={()=>{this.props.navigation.navigate('BloodRequest',{payload:item})}}>
    <View  style={styles.listItemContainer}>
    <Text>Request For {item.requestFor}</Text>
    <Text>{item.hospitalName} {item.hospitalAddress}</Text>
    <Text>Posted On {new Date(item.postedOn).toString()}</Text>
    </View>
    </TouchableNativeFeedback>
    </View>)
    
    ;
  }
  

  _acceptButtonPressed(){
    Alert.alert(
  'Confirmation',
  'Do you want to accept the request? The requester would receive an alert with your phone number and will contact you soon.',
  [
    {text: 'Yes', onPress: () => this.setState({accepted:true})},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  ],
  { cancelable: false }
)

  }




  render() {
    return (
    
     <View style={styles.container}>
      <Card title="Blood Requests lists">
      <View>
      <ActivityIndicator animating={this.state.loading}/>
      {!this.state.loading || <Text>No data right now</Text>}
      <FlatList
  data={this.state.data}
  renderItem={({item}) => {return this._renderItem(item)} }
  keyExtractor={(item,index)=>item.id}
        />

        
      </View>
      </Card>
     </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
 listItemContainer:{
   backgroundColor:'#ddd',
   padding:15,
   marginVertical:10,
 }

});
