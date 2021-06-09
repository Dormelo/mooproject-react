import 'react-native-gesture-handler';
import React, { useState } from 'react';
import HomeScreen from './screens/Home';
import CowsScreen from './screens/Cows';
import CowScreen from './screens/Cow';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'MooProject' }}
        />
        <Stack.Screen 
          name="Cows" 
          component={CowsScreen}
          options={{ title: 'Vaches' }} 
        />
        <Stack.Screen 
          name="Cow" 
          component={CowScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

