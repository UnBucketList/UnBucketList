import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  login: (username, creator) => {
    dispatch(actions.login(username, creator));
  },
  setEvents: (events) => {
    dispatch(actions.setEvents(events));
  },
});

const SignIn = (props) => {
  let username;
  let password;

  // makes fetch request to backend for logging in
  const handleLogin = () => {
    const body = JSON.stringify({ username, password });
    fetch(`https://unbucketlist.herokuapp.com/user/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data from login', data);
        if (data.username) {
          props.login(data.username, data.name);
          props.setEvents(data.events);
          props.navigation.navigate('Home');
        } else {
          alert('Failed to login');
        }
      })
      .catch((err) => console.log('Error logging in', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Welcome to UnBucket List!</Text>
        <Text>Please sign in to continue</Text>
      </View>

      <TextInput
        value={username}
        onChangeText={(e) => {
          username = e;
        }}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(pw) => {
          password = pw;
        }}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleLogin}>
        <Text>Log In</Text>
      </TouchableOpacity>
      <View style={styles.signup}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}
        >
          <Text>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 180,
  },
  header: {
    bottom: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
