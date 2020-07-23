import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import ShareEvent from './ShareEvent.js';

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
      <View style={styles.buttonContainer}>
        <Button
          title="Edit Event"
          onPress={() => {
            props.navigation.navigate('EditEvent', props.route.params);
          }}
        ></Button>
        <View style={styles.deleteButton}>
          <Button
            title="Delete Event"
            onPress={() => {
              console.log('Delete opacity clicked');
              props.deleteEvent(props.username, event.event_id);
            }}
          >
            <Text style={styles.delete}>X</Text>
          </Button>
        </View>

        <View style={styles.shareButton}>
          <ShareEvent key={event.event_id} event={event} user={props.creator} />
        </View>
      </View>
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
