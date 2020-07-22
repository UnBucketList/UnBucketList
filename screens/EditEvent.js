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
  
});

const mapDispatchToProps = (dispatch) => ({
  editEvent : (event) => {
      dispatch(actions.editEvent(event));
    }
});

const EditEvent = (props) => {
let name, description, location, date, guests, event_id;


const handleEditEvent = () => {
// console.log('in handle edit', event)
console.log('Event Name is', name);
          console.log('Event Name is', description);
          console.log('Event Location is', location);
          console.log('Event Time is', date);
          console.log('Participants are', guests);
          console.log('event id is ', event_id)

const event = {
  name,
  description,
  location,
  date,
  guests,
  event_id,
};

// props.editEvent(event)
props.navigation.navigate('Home')
}

  
  return (
    <View style={styles.container}>
      <Text> Edit Event </Text>
      <TextInput
        value={name}
        onChangeText={(e) => {
          name = e;
        }}
        placeholder="Event Name"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={(e) => {
          description = e;
        }}
        placeholder="Event Details"
        style={styles.input}
      />
      <TextInput
        value={location}
        onChangeText={(e) => {
          location = e;
        }}
        placeholder="Location"
        style={styles.input}
      />
      <TextInput
        value={date}
        onChangeText={(e) => {
          date = e;
        }}
        placeholder="Event Time"
        style={styles.input}
      />
      <TextInput
        value={guests}
        onChangeText={(e) => {
          guests = e;
        }}
        placeholder="Participants"
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleEditEvent}
      >
        <Text>Edit</Text>
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
    borderColor: 'black',
    marginBottom: 10,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
