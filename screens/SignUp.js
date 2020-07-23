import React, { useState } from 'react';
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
  login: (username, creator) => {
    dispatch(actions.login(username, creator));
  },
});

const SignUp = (props) => {
  // email is [0], username is [1]
  const [duplicateData, setDuplicateData] = useState([false, false]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // makes fetch request to create a new account
  // goes home on successful sign up
  const handleSignUp = () => {
    console.log('Inside handleSignUp user details are');
    console.log(name, email, username, password);
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    } else if (!username || !password || !email || !name) {
      alert('One or more fields not entered');
      return;
    }
    const body = JSON.stringify({
      name,
      email,
      username,
      password,
    });
    fetch('https://unbucketlist.herokuapp.com/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errorMessage) {
          if (data.errorMessage === 'email') {
            setDuplicateData([true, false]);
          } else if (data.errorMessage === 'username') {
            setDuplicateData([false, true]);
          }
          return;
        }
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
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.text}>Please enter information below</Text>
        </View>
        <TextInput
          onChangeText={(e) => {
            setName(e);
          }}
          placeholder={'name'}
          style={styles.input}
        />
        {duplicateData[0] ? (
          <Text style={styles.errMsg}>
            *Email already exists, enter new address or log in
          </Text>
        ) : null}
        <TextInput
          onChangeText={(e) => {
            setEmail(e);
          }}
          placeholder={'email'}
          style={duplicateData[0] ? styles.duplicateInput : styles.input}
        />
        {duplicateData[1] ? (
          <Text style={styles.errMsg}>
            *Username already exists, enter new username or log in
          </Text>
        ) : null}
        <TextInput
          onChangeText={(e) => {
            setUsername(e);
          }}
          placeholder={'username'}
          style={duplicateData[1] ? styles.duplicateInput : styles.input}
        />
        <TextInput
          onChangeText={(e) => {
            setPassword(e);
          }}
          placeholder={'password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          onChangeText={(e) => {
            setConfirmPassword(e);
          }}
          placeholder={'confirm password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.text}>Sign-Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#829AB1',
    alignItems: 'center',
  },
  body: {
    marginTop: 125,
    alignItems: 'center',
  },
  text: {
    color: '#334E68',
  },
  header: {
    bottom: 10,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#102A43',
    borderRadius: 3,
    marginBottom: 10,
  },
  duplicateInput: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 3,
    marginBottom: 10,
  },
  errMsg: {
    color: 'red',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
