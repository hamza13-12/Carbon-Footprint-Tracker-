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
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="white" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: 'white',
            headerBackTitleVisible: true,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={AccountCreationScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
