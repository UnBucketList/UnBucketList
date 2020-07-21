import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
      <br></br>
      <View>
        <Text>Events display here in ScrollView</Text>
      </View>
      <br></br>
      <TouchableOpacity
        onPress={() => {
          console.log('Add event pressed');
          props.navigation.navigate('AddEvent');
        }}
      >
        <Text>+ Add an Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Edit event pressed');
          props.navigation.navigate('EditEvent');
        }}
      >
        <Text>Edit an Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Making fetch request');
          fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => console.log('data from fetch', data))
            .catch((err) => console.log('err in fetch', err));
        }}
      >
        <Text>Fetch dogs</Text>
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
  scrollContainer: {
    maxHeight: 200,
  },
});

export default Home;
