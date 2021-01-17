import React, { Component } from 'react'
import {View,TextInput,ScrollView,KeyboardAvoidingView,TouchableOpacity,StyleSheet,Alert,Text,Modal} from 'react-native'
import firebase from 'firebase'
import { Header } from 'react-native-elements'
import db from '../config'

export default class SignUpLoginScreen extends Component{
    constructor(props){
        super(props)
        this.state={
          email : "",
          password : "",
          isVisible: false,
          firstName: "",
          lastName: "",
          mobileNumber: "",
          address: "",
          confirmPassword: ""
        }
      }
      userLogin = (email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
          return Alert.alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }

      userSignUp = (email, password,confirmPassword) =>{
        if(password !== confirmPassword){
            return Alert.alert("password doesn't match\nCheck your password.")
        }else{
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((response)=>{
            db.collection('users').add({
              first_name:this.state.firstName,
              last_name:this.state.lastName,
              mobile_number:this.state.mobileNumber,
              email:this.state.email,
              address:this.state.address
            })
            return  Alert.alert(
                 'User Added Successfully',
                 '',
                 [
                   {text: 'OK', onPress: () => this.setState({"isVisible" : false})},
                 ]
             );
          })
        }
      }
      showModal = ()=>{
        return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isVisible}
        >
          <View>
            <ScrollView style={{width:'100%'}}>
              <Text style={{fontSize:20,fontFamily:'Felix Titling',alignSelf:'center'}}>Registration</Text>
            <TextInput
            placeholder="Type First Name Here..."
            style={styles.registerBox}
            maxlength={8}
            onChangeText={(text)=>{
              this.setState({
                firstName: text
              })
            }}            
            />
                <TextInput
            placeholder="Type Last Name Here..."
            style={styles.registerBox}
            maxlength={8}
            onChangeText={(text)=>{
              this.setState({
                lastName: text
              })
            }}            
            />
                <TextInput
            placeholder="Type Phone Number Here..."
            style={styles.registerBox}
            keyboardType = 'numeric'
            onChangeText={(text)=>{
              this.setState({
                mobileNumber: text
              })
            }}            
            />
                <TextInput
            placeholder="Type Email Here..."
            keyboardType="email-address"
            style={styles.registerBox}
            onChangeText={(text)=>{
              this.setState({
                email: text
              })
            }}            
            />
            <TextInput
            placeholder="Type Your Address Here..."
            style={styles.registerBox}
            onChangeText={(text)=>{
              this.setState({
                address: text
              })
            }}
            />
                 <TextInput
                   style={styles.registerBox}
                   placeholder="Type Password Here....."
                   secureTextEntry={true}
                   onChangeText={(text)=>{
                    this.setState({
                      password: text
                    })
                  }}
                   />
                         <TextInput
                   style={styles.registerBox}
                   placeholder="Confirm Password"
                   secureTextEntry={true}
                   onChangeText={(text)=>{
                    this.setState({
                      confirmPassword: text
                    })
                  }}
                   />
            <TouchableOpacity
              style={styles.loginRegistrationButton}
              onPress={()=>
                this.userSignUp(this.state.email, this.state.password, this.state.confirmPassword)
              }
            >
            <Text style={{alignSelf:'center',fontWeight:'bold'}}>Register</Text>
            </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
          );
        }
    render(){
        return(
           
                <View style={styles.container}>
                      <Header
                backgroundColor={'#FF0000'}
                centerComponent={{
                  text: 'Barter System',
                  style: { color: '#FFC0CB', fontSize: 30, fontFamily:'Felix Titling' },
                }}
                />
                    <View style={{justifyContent:'center',alignItems:'center'}}>
          {
            this.showModal()
          }
        </View>
                     <KeyboardAvoidingView>
            <Text style={{alignSelf:'center',fontSize:30,fontFamily:'Bahnschrift'}}>Login</Text>
                <Text style={{alignSelf:'center',fontFamily:'Agency FB',fontSize:20}}>Email</Text>
             <TextInput
            style={styles.loginBox}
            keyboardType ='email-address'
            placeholder="Type Your Email Here...."
            onChangeText={(text)=>{
              this.setState({
                email: text
              })
            }}
            value={this.state.email}
            />
<Text style={{alignSelf:'center',fontFamily:'Agency FB',fontSize:20}}>Password</Text>
<TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              placeholder="Type Password Here...."
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
              value={this.state.password}
            />

          <TouchableOpacity 
          style = {styles.loginButton}
              onPress = {()=>{this.userLogin(this.state.email, this.state.password),this.props.navigation.navigate('HomeScreen')}}
              >
            <Text style={{fontSize:18,fontWeight:'bold',fontFamily:'LuzSans-Book',alignSelf:'center'}}>Login</Text>
          </TouchableOpacity>

          </KeyboardAvoidingView>
          </View>
            
        )
    }
  }


const styles = StyleSheet.create({
    loginBox: {
        width: 200,
        height: 50,
        borderRadius: 5,
        alignSelf:'center'
    },
    
    loginButton: {
        width: 100,
        height: 25,
        borderRadius: 10,
        backgroundColor: '#FFC0CB',
        alignSelf:'center',
        flex:1,
        margin: 10,
        border: 15,
        borderColor:'#800080',
    },
    signUpButton: {
        width: 100,
        height: 25,
        borderRadius: 10,
        backgroundColor: '#FFC0CB',
        alignSelf:'center',
        flex:1,
        margin: 1,
        border: 15,
        borderColor: '#800080'
    },
    container: {
        backgroundColor:'#FFA500',
        width:'100%',
        height:'100%',
        flex:1
    },
    modalContainer:{
      flex:1,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      marginRight:30,
      marginLeft : 30,
      marginTop:80,
      marginBottom:80,
    },
    registerBox: {
      alignSelf:'left',
      width: 200,
       height: 50,
       border: 15,
       borderColor:'#FFA500',
       margin:10
  },
  loginRegistrationButton: {
    borderRadius: 15,
    alignSelf:'center',
    backgroundColor: '#fbceb1',
    width: 75,
    height: 25
},
});