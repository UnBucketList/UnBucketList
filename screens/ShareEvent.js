import React from 'react';
import { Share, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  creator: state.unBucket.creator,
});

const ShareEvent = (props) => {
  const { event } = props;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${props.creator} cordially invites you to ${event.creator}'s event: ${event.name}. Let's ${event.description} on ${event.date}`,
        title: `You've got an unBucket list invite!`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View>
      <Button title="Share" onPress={onShare} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#BCCCDC',
    fontWeight: 'bold',
  },
});

export default connect(mapStateToProps, null)(ShareEvent);
