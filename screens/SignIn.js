import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const SignIn = (props) => {
  let username;
  let password;

  return (
    <View style={styles.container}>
      <Text>Welcome to UnBucket List!</Text>
      <br></br>
      <Text>Please sign in to continue</Text>
      <br></br>
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
      <TouchableOpacity
        onPress={() => {
          console.log('Username', username);
          console.log('Password', password);
          props.navigation.navigate('Home');
        }}
      >
        <Text>Log In</Text>
      </TouchableOpacity>
      <br></br>
      <Text>
        Don't have an account?
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}
        >
          <Text> Sign Up!</Text>
        </TouchableOpacity>
      </Text>
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
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default SignIn;
