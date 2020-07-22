import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';
import Home from './screens/Home.js';
import SignIn from './screens/SignIn.js';
import SignUp from './screens/SignUp.js';
import EditEvent from './screens/EditEvent.js';
import AddEvent from './screens/AddEvent.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: 'UnBucket List - Sign In' }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'UnBucket List - Home',
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: 'UnBucket List - Sign Up',
            }}
          />
          <Stack.Screen
            name="AddEvent"
            component={AddEvent}
            options={{
              title: 'UnBucket List - Add Event',
            }}
          />
          <Stack.Screen
            name="EditEvent"
            component={EditEvent}
            options={{ title: 'UnBucket List - Edit Event' }}
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
