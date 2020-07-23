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
    <View>
      <View>Event Name: {name}</View>
      <View>Description: {description}</View>
      <View>Created By: {creator}</View>
      <View>location: {location ? location : TBD}</View>
      <View>date: {date ? date : TBD}</View>
      <View>Who's Coming: {guests}</View>
    </View>

  )
}


export default (EditEvent)