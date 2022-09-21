import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import WithAnimation from './src/components/SplashScreen';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontWeight: 'bold', fontSize: 35, color: 'black' }}>
        HOME SCREEN
      </Text>
    </View>
  );
};

const App = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      RNBootSplash.hide({
        fade: true,
      });
      setPlay(true);
    }, 100);

    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <WithAnimation play={play} setPLay={setPlay} />
      <NavigationContainer onReady={() => setPlay(false)}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
