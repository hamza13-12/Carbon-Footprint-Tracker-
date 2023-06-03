import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native';
import Login from './Login';
import Home from './Home';
import AccountCreationScreen from './Signupscreen'
import BottomNav from './BottomNav';
import { NavigationContainer } from '@react-navigation/native';
import ManagementScreen from './ManagementScreen'
import NewsFeed from './NewsFeed';

export default function App() {
  return (
    <NewsFeed />
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
