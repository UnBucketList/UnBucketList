import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  username: state.unBucket.username,
  creator: state.unBucket.creator,
  events: state.unBucket.events,
});

const Home = (props) => {
  const eventList = props.events.map((event, i) => {
    if (props.creator === event.creator) {
      return (
        <TouchableOpacity
          key={`event${i}`}
          onPress={() => {
            event.owner = true;
            props.navigation.navigate('CardDetails', event);
          }}>
          <View style={styles.myEventCard}>
            <View style={styles.eventDetails}>
              <Text style={styles.eventLabel}>
                Event Name: <Text style={styles.eventValue}>{event.name}</Text>
              </Text>
              <Text style={styles.eventLabel}>
                Event Location:{' '}
                <Text style={styles.eventValue}>
                  {event.location ? event.location : 'TBD'}
                </Text>
              </Text>
              <Text style={styles.eventLabel}>
                Event Date:{' '}
                <Text style={styles.eventValue}>
                  {event.date ? event.date : 'TBD'}
                </Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          key={`event${i}`}
          onPress={() => {
            props.navigation.navigate('CardDetails', event);
          }}>
          <View style={styles.friendEventCard}>
            <View style={styles.eventDetails}>
              <Text style={styles.eventLabel}>
                Event Name: <Text style={styles.eventValue}>{event.name}</Text>{' '}
              </Text>
              <Text style={styles.eventLabel}>
                Event Location:{' '}
                <Text style={styles.eventValue}>{event.location}</Text>{' '}
              </Text>
              <Text style={styles.eventLabel}>
                Event Date:{' '}
                <Text style={styles.eventValue}>
                  {event.date ? event.date : 'TBD'}
                </Text>{' '}
              </Text>
              <Text style={styles.eventLabel}>
                Event Creator:{' '}
                <Text style={styles.eventValue}>{event.creator}</Text>{' '}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#486581',
    alignItems: 'center',
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
    fontSize: 18,
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
    backgroundColor: '#486581',
    width: '90%',
    overflow: 'scroll',
    maxHeight: 500,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  myEventCard: {
    flexDirection: 'row',
    backgroundColor: '#829AB1',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#243B53',
    margin: 5,
    maxHeight: 100,
    padding: 5,
  },
  friendEventCard: {
    flexDirection: 'row',
    backgroundColor: '#486581',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#243B53',
    margin: 5,
    maxHeight: 100,
    padding: 5,
  },
  eventDetails: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  shareButton: {
    position: 'absolute',
    right: 10,
    bottom: 5,
  },
});

export default connect(mapStateToProps, null)(Home);
