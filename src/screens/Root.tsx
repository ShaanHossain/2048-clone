import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 200,
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
  goalsContainer: {
    flex: 5,
  },
});

function Root() {
  return (
    <View style={styles.appContainer}>
      <Text>Hello World!</Text>
    </View>
  );
}

export default Root;
