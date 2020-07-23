import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({
  username: state.unBucket.username,
  creator: state.unBucket.creator,
  events: state.unBucket.events,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEvent: (username, eventId) => {
    dispatch(actions.deleteEvent(username, eventId));
  },
});

const Home = (props) => {
  console.log('Username in Home is', props.username);
  console.log('Creator name is', props.creator);
  console.log('Events in state are', props.events);

  const eventList = props.events.map((event, i) => {
    if (props.creator === event.creator) {
      return (
        <View key={`event${i}`} style={styles.myEventCard}>
          <View style={styles.deleteButton}>
            <TouchableOpacity
              onPress={() => {
                console.log('Delete opacity clicked');
                props.deleteEvent(props.username, event.event_id);
              }}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.eventLabel}>
            Event Name: <Text style={styles.eventValue}>{event.name}</Text>
          </Text>
          <Text style={styles.eventLabel}>
            Event Location:{' '}
            <Text style={styles.eventValue}>{event.location}</Text>
          </Text>
          <Text style={styles.eventLabel}>
            Event Date: <Text style={styles.eventValue}>{event.date}</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('EditEvent');
            }}>
            <Text>Edit Event</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:saejinkang95@gmail.com')}>
            <Text>Share</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View key={`event${i}`} style={styles.friendEventCard}>
          <Text style={styles.eventLabel}>
            Event Name: <Text style={styles.eventValue}>{event.name}</Text>
          </Text>
          <Text style={styles.eventLabel}>
            Event Location:{' '}
            <Text style={styles.eventValue}>{event.location}</Text>
          </Text>
          <Text style={styles.eventLabel}>
            Event Date:<Text style={styles.eventValue}> {event.date}</Text>
          </Text>
        </View>
      );
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Welcome {props.creator}!</Text>
        <Text style={styles.text}>Here is your unBucket List</Text>
      </View>
      <ScrollView style={styles.eventContainer}>{eventList}</ScrollView>
      <TouchableOpacity
        onPress={() => {
          console.log('Add event pressed');
          props.navigation.navigate('AddEvent');
        }}>
        <Text style={styles.text}>Add an Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#243B53',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
  },
  header: {
    margin: 10,
    alignItems: 'center',
  },
  text: {
    color: '#F0F4F8',
  },
  eventLabel: {
    color: '#102A43',
    fontWeight: 'bold',
  },
  eventValue: {
    color: '#D9E2EC',
    fontWeight: 'bold',
  },
  eventContainer: {
    flex: 0.75,
    backgroundColor: '#627D98',
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'scroll',
    maxHeight: 500,
  },
  deleteButton: {
    flex: 0,
    position: 'absolute',
    right: 10,
    top: 5,
  },
  myEventCard: {
    backgroundColor: '#829AB1',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    height: 100,
    overflow: 'scroll',
    padding: 5,
  },
  friendEventCard: {
    backgroundColor: '#486581',
    borderWidth: 1,
    borderRadius: 3,
    margin: 5,
    height: 100,
    overflow: 'scroll',
    padding: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
