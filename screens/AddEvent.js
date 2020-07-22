import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({
  username: state.unBucket.username,
  creator: state.unBucket.creator,
});

const mapDispatchToProps = (dispatch) => ({
  addEvent: (event, username, creator) => {
    dispatch(actions.addEvent(event, username, creator));
  },
});

const AddEvent = (props) => {
  const [nameValueEntered, setNameValueEntered] = useState(true);
  let event_name, description, location, date, guests;

  const handleAddEvent = () => {
    const event = {
      event_name,
      description,
      location,
      date,
      guests,
    };
    if (event.event_name === undefined || event.description === undefined) {
      setNameValueEntered(false);
      // alert('Please include event Name and Description');
      console.log('hey hey hey');
    } else {
      console.log('event object------>', event);
      props.addEvent(event, props.username, props.creator);
      props.navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={event_name}
        onChangeText={(e) => {
          event_name = e;
        }}
        placeholder={nameValueEntered ? 'Event Name' : 'Event Name Required'}
        style={nameValueEntered ? styles.input : styles.noInput}
        // style={ styles.input}
        // placeholderTextColor={nameValueEntered ? 'gray' : 'red'}
      />
      <TextInput
        value={description}
        onChangeText={(e) => {
          description = e;
        }}
        placeholder={nameValueEntered ? 'Details' : 'Event Details Required'}
        style={nameValueEntered ? styles.input : styles.noInput}
        // style={styles.input}
        // placeholderTextColor={nameValueEntered ? 'gray' : 'red'}
      />
      <TextInput
        value={location}
        onChangeText={(e) => {
          location = e;
        }}
        placeholder={'Location'}
        style={styles.input}
      />
      <TextInput
        value={date}
        onChangeText={(e) => {
          date = e;
        }}
        placeholder={'Date/Time of Event'}
        style={styles.input}
      />
      <TextInput
        value={guests}
        onChangeText={(e) => {
          guests = e;
        }}
        placeholder={'Participants'}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddEvent}>
        <Text>Save New Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    marginBottom: 10,
  },
  noInput: {
    placeholderTextColor: 'red',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 3,
    marginBottom: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
