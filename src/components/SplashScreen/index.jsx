import React from 'react';

import Lottie from 'lottie-react-native';
import animation from '../../assets/animation/26384-honcho-splash-screen.json';

const WithAnimation = ({ play, setPLay }) => {
  return play ? (
    <Lottie
      source={animation}
      autoSize
      autoPlay
      loop={false}
      onAnimationFinish={() => setPLay(false)}
    />
  ) : null;
};

export default WithAnimation;
