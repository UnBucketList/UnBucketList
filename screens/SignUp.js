import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  login: (username) => {
    dispatch(actions.login(username));
  },
});

const SignUp = (props) => {
  let name, email, username, password, confirmPassword;

  // makes fetch request to create a new account
  // goes home on successful sign up
  const handleSignUp = () => {
    console.log('Inside handleSignUp user details are');
    console.log(name, email, username, password);
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    } else if (!username || !password || !email) {
      alert('One or more fields not entered');
      return;
    }
    const body = JSON.stringify({
      name,
      email,
      username,
      password,
    });
    fetch('https://unbucketlist/herokuapp.com/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data from signup', data);
        if (data.username) {
          props.login(data.username, data.name);
          props.navigation.navigate('Home');
        } else {
          alert('Sign up failed');
        }
      })
      .catch((err) => console.log('Error signing up', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Please enter information below</Text>
      </View>
      <TextInput
        onChangeText={(e) => {
          name = e;
        }}
        placeholder={'name'}
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          email = e;
        }}
        placeholder={'email'}
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          username = e;
        }}
        placeholder={'username'}
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          password = e;
        }}
        placeholder={'password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          confirmPassword = e;
        }}
        placeholder={'confirm password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSignUp}>
        <Text>Sign-Up!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 125,
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
