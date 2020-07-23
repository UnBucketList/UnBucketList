import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Alert,
  Share,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import ShareEvent from './ShareEvent.js';

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
  const shareData = {
    title: `New event invitation from ${props.creator}`,
    message: `Come hang out with me`,
  };

  const eventList = props.events.map((event, i) => {
    if (props.creator === event.creator) {
      return (
        <View key={`event${i}`} style={styles.myEventCard}>
          <View style={styles.deleteButton}>
            <TouchableOpacity
              title="X"
              onPress={() => {
                console.log('Delete opacity clicked');
                props.deleteEvent(props.username, event.event_id);
              }}
            >
              <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.shareButton}>
            <ShareEvent
              key={event.event_id}
              event={event}
              user={props.creator}
            />
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
              event.owner = true;
              props.navigation.navigate('CardDetails', event);
            }}
          >
            <Text style={styles.details}>More Details</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View key={`event${i}`} style={styles.friendEventCard}>
          <View style={styles.shareButton}>
            <ShareEvent
              key={event.event_id}
              event={event}
              user={props.creator}
            />
          </View>
          <Text style={styles.eventLabel}>
            Event Name: <Text style={styles.eventValue}>{event.name}</Text>{' '}
          </Text>
          <Text style={styles.eventLabel}>
            Event Location:{' '}
            <Text style={styles.eventValue}>{event.location}</Text>{' '}
          </Text>
          <Text style={styles.eventLabel}>
            Event Date: <Text style={styles.eventValue}>{event.date}</Text>{' '}
          </Text>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('CardDetails', event);
            }}
          >
            <Text style={styles.details}>More Details</Text>
          </TouchableOpacity>
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
        }}
      >
        <Text style={styles.text}>Add an Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#829AB1',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
  },
  detailsContainer: {
    width: 80,
  },
  header: {
    margin: 10,
    alignItems: 'center',
  },
  text: {
    color: '#F0F4F8',
  },
  details: {
    color: '#BCCCDC',
    fontWeight: 'bold',
  },
  eventLabel: {
    color: '#102A43',
    fontWeight: 'bold',
  },
  delete: {
    color: 'white',
    fontWeight: 'bold',
  },
  eventValue: {
    color: '#D9E2EC',
    fontWeight: 'bold',
  },
  eventContainer: {
    flex: 0.75,
    backgroundColor: '#829AB1',
    width: '90%',
    overflow: 'scroll',
    maxHeight: 500,
  },
  deleteButton: {
    flex: 0,
    alignItems: 'flex-end',
  },
  myEventCard: {
    backgroundColor: '#486581',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    height: 100,
    overflow: 'scroll',
    padding: 5,
  },
  friendEventCard: {
    backgroundColor: '#829AB1',
    borderWidth: 1,
    borderRadius: 3,
    margin: 5,
    height: 100,
    overflow: 'scroll',
    padding: 5,
  },
  shareButton: {
    flex: 0,
    position: 'absolute',
    right: 10,
    bottom: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
