import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  login: (userId) => {
    dispatch(actions.login(userId));
  },
});

const SignIn = (props) => {
  let username;
  let password;

  // makes fetch request to backend for logging in
  const handleLogin = () => {
    console.log('Inside handleLogin username and password are');
    console.log(username, password);
    // **TODO** move line below inside fetch once backend is connected and only on successful login
    props.navigation.navigate('Home');
    const body = JSON.stringify({ username, password });
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data from login', data);
        props.login(data);
      })
      .catch((err) => console.log('Error logging in', err));
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to UnBucket List!</Text>
      <Text>Please sign in to continue</Text>
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
      <Text>Don't have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('SignUp');
        }}
      >
        <Text>Sign Up!</Text>
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
    marginBottom: 10,
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

export default SignIn;
