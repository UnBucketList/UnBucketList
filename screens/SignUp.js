import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

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
    }
    // **TODO** move line below to successful sign up once backend is connected
    props.navigation.navigate('Home');
    const body = JSON.stringify({
      name,
      email,
      username,
      password,
    });
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => console.log('Data from signup', data))
      .catch((err) => console.log('Error signing up', err));
  };

  return (
    <View style={styles.container}>
      <Text>Please enter information below</Text>
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
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        onChangeText={(e) => {
          confirmPassword = e;
        }}
        placeholder={'Confirm Password'}
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
    justifyContent: 'center',
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

export default SignUp;
