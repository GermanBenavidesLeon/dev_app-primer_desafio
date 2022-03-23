import React, { useRef, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, View } from 'react-native';

const FadeView = (props) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnimation,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnimation])

  return (
    <Animated.View                 
      style={{
        ...props.style,
        opacity: fadeAnimation,         
      }}
    >
      {props.children}
    </Animated.View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <FadeView style={styles.animaFade}>
        <Text style={styles.bigBlue}>Hola German!</Text>
      </FadeView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  animaFade: {
    width: 240,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#cfd8dc',
  }
});

