import React, { Component } from 'react';
import { BackHandler, Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";

import Online from './online';
import Offline from './offline';

export default class Initial extends Component { 
  constructor(props) {
    super(props);
    this.state = { 
      isOnline: true
    };    
  }

  backAction = () => {  
    //console.log(this.webView); 
    //this.props.navigation.push('Online');        
    //return true;
    
    Alert.alert("Salir!", "Está seguro que quiere salir de la aplicación?", [
      {
        text: "No",
        onPress: () => null,
        style: "cancel"
      },
      { 
        text: "SI", 
        onPress: () => BackHandler.exitApp() 
      }
    ]);
    return true;
  };

  componentDidMount(){
    NetInfo.addEventListener(state => {
      state.isInternetReachable ? this.setState({ isOnline: true }) : this.setState({ isOnline: false });      
    });

    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      this.state.isOnline ? <Online/> : <Offline/>     
    )
  }
}