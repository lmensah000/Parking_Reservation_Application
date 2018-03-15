import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Logo extends React.Component {

	render(){
		return(
			<View style = {styles.container}>

          <TextInput style = {styles.inputBox} 
              underlineColorAndroid  = 'rgba(0,0,0,0)' 
              placeholder            = "Email"
              placeholderTextColor   = "#ffffff"
              selectionColor         = "#fff"
              keyboardType           = "email-address"
              blurOnSubmit           = { false }
              onSubmitEditing        = {()=> this.password.focus()}
              />

          <TextInput style = {styles.inputBox} 
              underlineColorAndroid  = 'rgba(0,0,0,0)' 
              placeholder            = "Password"
              secureTextEntry        = {true}
              placeholderTextColor   = "#ffffff"
              ref                    = {(input) => this.password = input}
              />

          <TouchableOpacity style = {styles.loginButton}>
            <Text style = {styles.loginButtonText}>{this.props.type}</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.guestButton} onPress = {this.button}>
					  <Text style = {styles.guestButtonText}>Continue As Guest</Text>
					</TouchableOpacity>

  		</View>
			)
	}
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },

  loginButton: {
    width: 300,
    backgroundColor: '#28a745',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  loginButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

  guestButtonText: {
  	color: '#ffff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
	},
	
  guestButton: {
    width: 300,
    marginVertical: 10,
    paddingVertical: 13
	}
  
});