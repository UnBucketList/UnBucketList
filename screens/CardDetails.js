import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal } from 'react-native';

import ShareEvent from './ShareEvent.js';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({
  username: state.unBucket.username,
  creator: state.unBucket.creator,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEvent: (username, eventId) => {
    dispatch(actions.deleteEvent(username, eventId));
  },
});

const CardDetails = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log('props.route.params is', props.route.params);
  let {
    event_id,
    name,
    description,
    location,
    date,
    guests,
    creator,
  } = props.route.params;

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.eventLabel}>
          Event Name: <Text style={styles.eventValue}>{name}</Text>
        </Text>
        <Text style={styles.eventLabel}>
          Description: <Text style={styles.eventValue}>{description}</Text>
        </Text>
        <Text style={styles.eventLabel}>
          Created By: <Text style={styles.eventValue}>{creator}</Text>
        </Text>
        <Text style={styles.eventLabel}>
          Location:{' '}
          <Text style={styles.eventValue}>{location ? location : 'TBD'}</Text>
        </Text>
        <Text style={styles.eventLabel}>
          Date: <Text style={styles.eventValue}>{date ? date : 'TBD'}</Text>
        </Text>
        {/* <Text style={styles.eventLabel}>{guests}</Text> */}
      </View>
      <View style={styles.buttonContainer}>
        {props.creator === creator ? (
          <View style={styles.buttonContainer}>
            <Button
              title='Edit Event'
              onPress={() => {
                props.navigation.navigate('EditEvent', props.route.params);
              }}></Button>
            <View style={styles.deleteButton}>
              <Button
                title='Delete Event'
                color='red'
                onPress={() => {
                  setModalVisible(true);
                  // props.deleteEvent(props.username, event_id);
                  // props.navigation.navigate('Home');
                }}>
                <Text style={styles.delete}>X</Text>
              </Button>
            </View>
          </View>
        ) : null}
        <View style={styles.shareButton}>
          <ShareEvent
            key={event_id}
            event={props.route.params}
            user={creator}
          />
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalDeleteContainer}>
          <Text style={styles.modalText}>Are you sure you want to delete this event?</Text>
          <View style={styles.modalButtonContainer}>
            <Button
            title='Cancel'
            color='white'
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text>Cancel</Text>
            </Button>
            <Button
            title='Delete'
            color='red'
              onPress={() => {
                setModalVisible(false);
                props.deleteEvent(props.username, event_id);
                props.navigation.navigate("Home");
              }}
            >
              <Text>Delete</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#486581',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#334E68',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9FB3C8',
    padding: 15,
  },
  eventLabel: {
    color: '#829AB1',
    fontSize: 18,
    display: 'flex',
  },
  eventValue: {
    color: '#BCCCDC',
    display: 'flex',
  },
  edit: {
    color: '#627D98',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  deleteButton: {
    marginLeft: 10,
  },
  shareButton: {
    marginTop: 10,
  },
  modalDeleteContainer: {
    alignSelf: "center",
    top: '70%',
    color: "white",
  },
  modalButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 180,
    marginLeft: '25%',
    marginTop: 15
  },
  modalText: {
    color: '#BCCCDC',
    fontSize: 18
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
