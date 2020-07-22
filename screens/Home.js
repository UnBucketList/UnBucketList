import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  username: state.unBucket.username,
  creator: state.unBucket.creator,
  events: state.unBucket.events,
});

const mapDispatchToProps = (dispatch) => ({
  // pertinent actions here
});

const Home = (props) => {
  console.log('Username in Home is', props.username);
  console.log('Creator name is', props.creator);
  console.log('Events in state are', props.events);

  const eventList = props.events.map((event, i) => {
    return (
      <View key={`event${i}`} style={styles.eventCard}>
        <Text>Event Name: {event.name}</Text>
        <Text>Event Location: {event.location}</Text>
        <Text>Event Date: {event.date}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Welcome {props.creator}!</Text>
        <Text>Here is your unBucket List</Text>
      </View>
      <View style={styles.eventContainer}>{eventList}</View>
      <TouchableOpacity
        onPress={() => {
          console.log('Add event pressed');
          props.navigation.navigate('AddEvent');
        }}>
        <Text>Add an Event</Text>
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
    bottom: 10,
  },
  header: {
    margin: 10,
    alignItems: 'center',
  },
  eventContainer: {
    flex: 0.75,
    backgroundColor: 'orange',
    width: '90%',
    borderWidth: 1,
    borderRadius: 3,
    overflow: 'scroll',
    maxHeight: 500,
  },
  eventCard: {
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 3,
    margin: 5,
    height: 100,
    overflow: 'scroll',
    padding: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
