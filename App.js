import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from './src/screens/initial';
import Online from './src/screens/online';
import Offline from './src/screens/offline';
import Error from './src/screens/error';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Initial"
        headerMode="none" 
      >
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Online" component={Online} />
        <Stack.Screen name="Offline" component={Offline} />
        <Stack.Screen name="Error" component={Error} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}