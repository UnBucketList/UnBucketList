import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const CardDetails = (props) => {
  let {event_id, name, description, location, date, guests, creator, username} = props.route.params;


  return (
    <View style={styles.container}>
      <Text>Event Name: {name}</Text>
      <Text>Description: {description}</Text>
      <Text>Created By: {creator}</Text>
      <Text>location: {location ? location : 'TBD'}</Text>
      <Text>date: {date ? date : 'TBD'}</Text>
      <Text>{guests}</Text>
      <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('EditEvent', props.route.params);
          }}
          >
          <Text>Edit Event</Text>
          </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 10,
    },
})
export default (CardDetails)