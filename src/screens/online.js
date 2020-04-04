import React, { Component } from 'react';
import { View, StatusBar, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import Error from './error';
import Offline from './offline';

/*export default class Online extends Component{
  render(){
    return(
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#40A5A2" barStyle="light-content" />
        <WebView
          source={{ uri: 'http://ospm.com.ar' }}
          automaticallyAdjustContentInsets={true} 
          scalesPageToFit={false}
          javaScriptEnabled={true}
          ignoreSslError={true}
          domStorageEnabled={true}
          cacheEnabled={true}

          startInLoadingState={true}

          onLoad={() => <Error/>}

          renderError={() => this.navigation.navigate('Error')}
          onError={() => this.navigation.navigate('Error')}
        />
      </View>
    );
  }
}*/

export default function Online({ navigation }){
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor="#40A5A2" barStyle="light-content" />
      <WebView
        source={{ uri: 'http://ospm.com.ar' }}
        //source={{ uri: 'https://www.osde.com.ar/' }}        
        
        automaticallyAdjustContentInsets={true} 
        scalesPageToFit={true}
        javaScriptEnabled={true}
        ignoreSslError={true}
        domStorageEnabled={true}
        cacheEnabled={true}

        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator 
                                style={styles.container} 
                                size={'large'} 
                                color={'#40A5A2'} />}

        renderError={() => <Error />}
        onError={() => <Error />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})