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

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  editEvent: (event, username, creator) => {
    dispatch(actions.editEvent(event, username, creator));
  },
});

const EditEvent = (props) => {
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

  console.log(props.route.params);

  const handleEditEvent = () => {
    //           console.log('Event Name is', description);
    //           console.log('Event Location is', location);
    //           console.log('Event Time is', date);
    //           console.log('Participants are', guests);
    //           console.log('event id is ', event_id)

    const event = {
      name,
      description,
      location,
      date,
      guests,
      event_id,
    };
    console.log('event name', event);
    props.editEvent(event, username, creator);
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text> Edit Event </Text>
      <TextInput
        onChangeText={(e) => {
          name = e;
        }}
        placeholder={props.route.params.name}
        placeholderTextColor="#91a6b4"
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          description = e;
        }}
        placeholder={props.route.params.description}
        placeholderTextColor="#91a6b4"
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          location = e;
        }}
        placeholder={props.route.params.location}
        placeholderTextColor="#91a6b4"
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          date = e;
        }}
        placeholder={props.route.params.date}
        placeholderTextColor="#91a6b4"
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          guests = e;
        }}
        placeholder={props.route.params.guests}
        placeholderTextColor="#91a6b4"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleEditEvent}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#486581',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    color: '#F0F4F8',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
