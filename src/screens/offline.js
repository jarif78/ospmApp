import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';

export default function Offline({ navigation }){
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#EB507E" barStyle="light-content" />
            <Image
                style={styles.image}
                source={require('../assets/img/logotipo-white.png')}
            />
            <Text style={styles.h1}>Sin conexión a Internet</Text>
            <Text style={styles.h2}>Esperando conexión...</Text>                
        </View>
    );
}

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;

const styles = StyleSheet.create({
    container: {
        color: 'white',
        flex: 1,
        backgroundColor: '#EB507E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: imageHeight,
        width: imageWidth 
    },
    h1: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 26,
        paddingTop: 40,
        textAlign: 'center'
    },
    h2: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        paddingTop: 40,
        textAlign: 'center'
    }
});