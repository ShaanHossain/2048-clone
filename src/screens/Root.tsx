import { StyleSheet } from 'react-native';
import React from 'react';
import Animation from '@screens/Animation';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

function Root() {
  return <Animation />;
}

export default Root;
