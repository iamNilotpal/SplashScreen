import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';

import WithAnimation from './src/components/SplashScreen';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontWeight: 'bold', fontSize: 35 }}>HOME SCREEN</Text>
    </View>
  );
};

const App = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setPlay(true);
      RNBootSplash.hide({
        fade: true,
      });
    }, 100);

    return () => clearTimeout(id);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
      {play && <WithAnimation play={play} setPLay={setPlay} />}
      <NavigationContainer onReady={() => setPlay(false)}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
