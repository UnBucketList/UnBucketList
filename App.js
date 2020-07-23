import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
          <Stack.Screen
            name="CardDetails"
            component={CardDetails}
            options={{ title: 'UnBucket List - CardDetails' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
