import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native';
import Home from './Home';
import { useNavigation } from '@react-navigation/native';
import auth from './firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function App() {
  const { width, height } = Dimensions.get('window');
  const cardWidth = Math.min(width, height) * 0.7;
  const cardHeight = cardWidth * 1.4;

  const navigation = useNavigation();

  //initializing the state variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User logged in:', user);
      // Redirect or navigate to the home screen
      navigation.navigate('Main');
    })
    .catch((error) => {
      console.log('Login error:', error);
    });
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  }

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
              <Text style={{ fontSize: 20, color: '#fff', marginTop: 20 }}>Email</Text>
              <TextInput style={styles.input} placeholder='email' placeholderTextColor='#888' onChangeText={(text) => setEmail(text)} />
              <Text style={{ fontSize: 20, color: '#fff', marginTop: 20 }}>Password</Text>
              <TextInput style={styles.input} placeholder='password' placeholderTextColor='#888' secureTextEntry onChangeText={(text) => setPassword(text)}/>
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signupButtonText}>Sign Up!</Text>
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
  signupButtonText: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#fff',
    width: 63,
    height: 19,
    marginTop: 15,
  }
});
