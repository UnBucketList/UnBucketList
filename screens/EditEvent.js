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
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.text}>Edit Event</Text>
        </View>
        <TextInput
          onChangeText={(e) => {
            name = e;
          }}
          placeholder={name}
          placeholderTextColor="#91a6b4"
          style={styles.input}
        />
        <TextInput
          onChangeText={(e) => {
            description = e;
          }}
          placeholder={description}
          placeholderTextColor="#91a6b4"
          style={styles.input}
        />
        <TextInput
          onChangeText={(e) => {
            location = e;
          }}
          placeholder={location ? location : 'Location'}
          placeholderTextColor="#91a6b4"
          style={styles.input}
        />
        <TextInput
          onChangeText={(e) => {
            date = e;
          }}
          placeholder={date ? date : 'Date mm/dd/yy'}
          placeholderTextColor="#91a6b4"
          style={styles.input}
        />
        <TextInput
          onChangeText={(e) => {
            guests = e;
          }}
          placeholder={guests ? guests : 'Participants'}
          placeholderTextColor="#91a6b4"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleEditEvent}>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#486581',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    alignItems: 'center',
    marginBottom: 140,
  },
  header: {
    marginBottom: 13,
  },
  text: {
    color: '#d9e2ec',
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
