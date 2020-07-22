import React from 'react';
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addEvent: (event) => {
    dispatch(actions.addEvent(event));
  },
});

const AddEvent = (props) => {
  let event_name, description, location, date, eventGuests;

  // const handleclick = (event) => {
  //   console.log('im in handleclick', event);
  //   props.addEvents(event);
  // };

  return (
    <View style={styles.container}>
      <TextInput
        value={event_name}
        onChangeText={(e) => {
          event_name = e;
        }}
        placeholder={'Event Name'}
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={(e) => {
          description = e;
        }}
        placeholder={'Details'}
        style={styles.input}
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
        value={eventGuests}
        onChangeText={(e) => {
          eventGuests = e;
        }}
        placeholder={'Participants'}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => {
          const event = {
            event_name,
            description,
            location,
            date,
            eventGuests,
          };
          props.addEvent(event);
          //handleclick(event);
          //props.navigation.navigate('Home');
        }}
      >
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
