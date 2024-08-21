import { Button, Text, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import React from 'react';

function Animation() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View
      style={{
        marginTop: 100,
        marginHorizontal: 20,
        flex: 0.25,
        alignItems: 'center',
      }}>
      <Text>Hello </Text>
      <View>
        <Animated.View
          style={{
            width,
            height: 100,
            backgroundColor: 'violet',
            borderRadius: 12,
          }}
        />
        <Button onPress={handlePress} title='Click me' />
      </View>
    </View>
  );
}

export default Animation;
