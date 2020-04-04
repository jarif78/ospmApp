import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

export default function Error({navigation}){
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#F81700" barStyle="light-content" />
            <Image
                style={styles.image}
                source={require('../assets/img/logotipo-white.png')}
            />
            <Text style={styles.h1}>Se ha producido un error</Text>
            
            <View style={{margin:30}}>           
                <ThemeProvider>
                    <Button
                        title="Reintentar"
                        type="outline"
                        titleStyle={{ color: 'white' }}
                        onPress={() => navigation.navigate('Online')}
                    />
                </ThemeProvider>
            </View>
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
        backgroundColor: '#F81700',
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