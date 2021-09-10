import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
//SET UP REDUX

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerShown:false,
            }}
          />
          <Stack.Screen 
            name='MapScreen'
            component={MapScreen}
            options={{
              headerShown:false,
            }}
          />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
