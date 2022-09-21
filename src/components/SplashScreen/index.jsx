import React from 'react';

import Lottie from 'lottie-react-native';
import animation from '../../assets/animation/26384-honcho-splash-screen.json';
import { StyleSheet, View } from 'react-native';

const WithAnimation = ({ play, setPLay }) => {
  return play ? (
    <View style={styles.container}>
      <Lottie
        source={animation}
        autoPlay
        loop={false}
        onAnimationFinish={() => setPLay(false)}
        resizeMode="cover"
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WithAnimation;
