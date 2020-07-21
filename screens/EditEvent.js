import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

const EditEvent = (props) => {
  let eventName, eventDetails, eventLoc, eventTime, eventGuests;
  return (
    <View style={styles.container}>
      <Text> Edit Event </Text>
      <TextInput
        value={eventName}
        onChangeText={(e) => {
          eventName = e;
        }}
        placeholder="Event Name"
        style={styles.input}
      />
      <TextInput
        value={eventDetails}
        onChangeText={(e) => {
          eventDetails = e;
        }}
        placeholder="Event Details"
        style={styles.input}
      />
      <TextInput
        value={eventLoc}
        onChangeText={(e) => {
          eventLoc = e;
        }}
        placeholder="Location"
        style={styles.input}
      />
      <TextInput
        value={eventTime}
        onChangeText={(e) => {
          eventTime = e;
        }}
        placeholder="Event Time"
        style={styles.input}
      />
      <TextInput
        value={eventGuests}
        onChangeText={(e) => {
          eventGuests = e;
        }}
        placeholder="Participants"
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => {
          console.log('Event Name is', eventName);
          console.log('Event Name is', eventDetails);
          console.log('Event Location is', eventLoc);
          console.log('Event Time is', eventTime);
          console.log('Participants are', eventGuests);
          props.navigation.navigate('Home');
        }}
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
export default EditEvent;
