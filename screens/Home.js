import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  events: state.unBucket.events,
});

const mapDispatchToProps = (dispatch) => ({
  // pertinent actions here
});

const Home = (props) => {
  console.log(props.events);
  const eventList = props.events.map((event) => {
    return (
      <View>
        <Text>Event Name: {event.eventName}</Text>
        <Text>Event Details: {event.eventDetails}</Text>
        <Text>Event Location: {event.eventLoc}</Text>
        <Text>Event Time: {event.eventTime}</Text>
        <Text>Participants: {event.eventGuests}</Text>
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
      <br></br>
      <ScrollView style={{ flex: 2 }}>{eventList}</ScrollView>
      <br></br>
      <TouchableOpacity
        onPress={() => {
          console.log('Add event pressed');
          props.navigation.navigate('AddEvent');
        }}
      >
        <Text>+ Add an Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Edit event pressed');
          props.navigation.navigate('EditEvent');
        }}
      >
        <Text>Edit an Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    maxHeight: 200,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
