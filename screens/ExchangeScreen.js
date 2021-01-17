import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import { KeyboardAvoidingView } from 'react-native'

export default class ExchangeScreen extends Component{
    
  constructor(){
    super()
    this.state = {
      userName : firebase.auth().currentUser.email,
      itemName : "",
      description : ""
    }
  }
  addItem=(itemName, description)=>{
    var userName = this.state.userName
    db.collection("exchange_requests").add({
      "username"    : userName,
      "item_name"   : itemName,
      "description" : description
     })
     this.setState({
       itemName : '',
       description :''
     })

     this.setState({
       itemName : '',
       description :''
     })
     return Alert.alert(
          'Item ready to exchange',
          '',
          [
            {text: 'OK', onPress: () => {

              this.props.navigation.navigate('HomeScreen')
            }}
          ]
      );
  }
    render(){
        return(
    <View styles={{flex:1}}>
        <KeyboardAvoidingView>
        <TextInput
        placeholder="Item Name"
        styles={styles.itemName}
        maxLength ={8}
        onChangeText={(text)=>{
          this.setState({
            itemName: text
          })
        }}
        value={this.state.itemName}
        />
        <TextInput
        multiline
        placeholder="Description"
        styles={styles.descriptionStyle}
       numberOfLines={4}
        onChangeText={(text)=>{
          this.setState({
            description: text
          })
        }}
        value={this.state.descriptiona}
        />
                <TouchableOpacity
          style={{alignSelf:'center'}}
          onPress = {()=>{this.addItem(this.state.itemName, this.state.description),
           this.setState={
               description:'',
               itemName:''
           }
        }}
          >
          <Text style={{color:'#ffab91', fontSize:18, fontWeight:'bold'}}>Add Item</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
</View>
    )
    }
}

const styles = StyleSheet.create({
    itemName:{
      width:25,
      height:100,
      alignSelf:'center',
    },
    descriptionStyle:{
        width:50,
        height:100,
        alignSelf:'center',
      },
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        