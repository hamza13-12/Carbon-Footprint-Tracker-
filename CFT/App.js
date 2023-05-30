import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native';

export default function App() {
  const { width, height } = Dimensions.get('window');
  const cardWidth = Math.min(width, height) * 0.7;
  const cardHeight = cardWidth * 1.4;

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='white' />
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
        <View style={styles.cardContainer}>
          <Image source={require("./assets/Card.png")} style={[styles.cardImage, { width: cardWidth, height: cardHeight }]} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  cardContainer: {
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    borderRadius: 20,
  }
});
