import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native';

export default function App() {
  const { width, height } = Dimensions.get('window');
  const cardWidth = Math.min(width, height) * 0.7;
  const cardHeight = cardWidth * 1.4;

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = () => {
    // Perform login logic here
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='white' />
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
      <TouchableOpacity style={styles.touchable} onPress={dismissKeyboard} activeOpacity={1}>
        <View style={styles.cardContainer}>
          <Image source={require("./assets/Card.png")} style={[styles.cardImage, { width: cardWidth, height: cardHeight }]} />
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Welcome to </Text>
            <Text style={styles.cardText}>Carbon Footprint Tracker </Text>
            <Text style={{ fontSize: 20 , color: '#fff', marginTop: 20}}>Username</Text>
            <TextInput style={styles.input} placeholder='username' placeholderTextColor='#888' />
            <Text style={{ fontSize: 20 , color: '#fff', marginTop: 20}}>Password</Text>
            <TextInput style={styles.input} placeholder='password' placeholderTextColor='#888' secureTextEntry/>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
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
  },
  cardContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingTop: 20,
  },
  cardText: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#A3F1A2',
    marginTop: 10,
    paddingHorizontal: 10,
    borderColor: '#888',
    borderWidth: 1,
  },
  loginButton: {
    width: 150,
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: '#3D5900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#fff',
  },
});
