import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  username: state.unBucket.username,
  events: state.unBucket.events,
});

const mapDispatchToProps = (dispatch) => ({
  // pertinent actions here
});

const Home = (props) => {
  console.log(props.events);
  console.log('Username is', props.username);
  const eventList = props.events.map((event) => {
    return (
      <View style={styles.eventCard}>
        <Text>Event Name: {event.event_name}</Text>
        <Text>Event Location: {event.location}</Text>
        <Text>Event Time: {event.date}</Text>
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
      <View style={styles.eventContainer}>{eventList}</View>
      <TouchableOpacity
        onPress={() => {
          console.log('Add event pressed');
          props.navigation.navigate('AddEvent');
        }}
      >
        <Text>Add an Event</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => {
          console.log('Edit event pressed');
          props.navigation.navigate('EditEvent');
        }}
      >
        <Text>Edit an Event</Text>
      </TouchableOpacity> */}
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
  scrollContainer: {
    maxHeight: 200,
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
    height: 75,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
