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
  let {
    event_id,
    name,
    description,
    location,
    date,
    guests,
    creator,
    username,
  } = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Event Name: {name}</Text>
      <Text style={styles.text}>Description: {description}</Text>
      <Text style={styles.text}>Created By: {creator}</Text>
      <Text style={styles.text}>location: {location ? location : 'TBD'}</Text>
      <Text style={styles.text}>date: {date ? date : 'TBD'}</Text>
      <Text style={styles.text}>{guests}</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('EditEvent', props.route.params);
        }}>
        <Text style={styles.edit}>Edit Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#243B53',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
  },
  text: {
    color: '#BCCCDC',
  },
  edit: {
    color: '#627D98',
    fontSize: 18,
  },
});
export default CardDetails;
