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

const mapStateToProps = (state) => ({
  username: state.unBucket.username,
});

const mapDispatchToProps = (dispatch) => ({
  addEvent: (event, username) => {
    dispatch(actions.addEvent(event, username));
  },
});

const AddEvent = (props) => {
  let event_name, description, location, date, guests;

  const handleAddEvent = () => {
    const event = {
      event_name,
      description,
      location,
      date,
      guests,
    };
    props.addEvent(event, props.username);
    props.navigation.navigate('Home');
  };

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
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
