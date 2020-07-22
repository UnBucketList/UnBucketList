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
  login: (username) => {
    dispatch(actions.login(username));
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
    fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'DATA SEAN')
        if (data.errorMessage){
          console.log('SEAN IN HERE')
          if (data.errorMessage === 'email'){
            setDuplicateData([true, false]);
          } else if (data.errorMessage ==='username'){
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
      <View style={styles.header}>
        <Text>Please enter information below</Text>
      </View>
      <TextInput
        onChangeText={(e) => {
          setName(text => text += e);
        }}
        placeholder={'name'}
        style={styles.input}
      />
      {duplicateData[0] ? <Text style={styles.errMsg}>*Email already exists, enter new address or log in</Text> : null}
      <TextInput
        onChangeText={(e) => {
          setEmail(text => text += e);
        }}
        placeholder={'email'}
        style={duplicateData[0] ? styles.duplicateInput : styles.input}
      />
      {duplicateData[1] ? <Text style={styles.errMsg}>*Username already exists, enter new username or log in</Text> : null}
      <TextInput
        onChangeText={(e) => {
          setUsername(text => text += e);
        }}
        placeholder={'username'}
        style={duplicateData[1] ? styles.duplicateInput : styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          setPassword(text => text += e);
        }}
        placeholder={'password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          setConfirmPassword(text => text += e);
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
