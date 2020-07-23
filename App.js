import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Home from './screens/Home.js';
import SignIn from './screens/SignIn.js';
import SignUp from './screens/SignUp.js';
import EditEvent from './screens/EditEvent.js';
import AddEvent from './screens/AddEvent.js';
import CardDetails from './screens/CardDetails.js';
//. should be good to try

// create stack for our screens
const Stack = createStackNavigator();

export default function App() {
  return (
    // Provider wrapping for redux store access
    <Provider store={store}>
      {/* Navigation wrapping for routing access */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='SignIn'
            component={SignIn}
            options={{
              title: 'Sign In',
              headerStyle: {
                backgroundColor: '#102A43',
              },
              headerTintColor: '#D9E2EC',
            }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#102A43',
              },
              headerTintColor: '#D9E2EC',
            }}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{
              title: 'Sign Up',
              headerStyle: {
                backgroundColor: '#102A43',
              },
              headerTintColor: '#D9E2EC',
            }}
          />
          <Stack.Screen
            name='AddEvent'
            component={AddEvent}
            options={{
              title: 'Add Event',
              headerStyle: {
                backgroundColor: '#102A43',
              },
              headerTintColor: '#D9E2EC',
            }}
          />
          <Stack.Screen
            name='EditEvent'
            component={EditEvent}
            options={{
              title: 'Edit Event',
              headerStyle: {
                backgroundColor: '#102A43',
              },
              headerTintColor: '#D9E2EC',
            }}
          />
          <Stack.Screen
            name='CardDetails'
            component={CardDetails}
            options={{
              title: 'Details',
              headerStyle: {
                backgroundColor: '#102A43',
              },
              headerTintColor: '#D9E2EC',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#090909',
  },
});
