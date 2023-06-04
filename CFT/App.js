import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import AccountCreationScreen from './Signupscreen';
import BottomNav from './BottomNav';
import Home from './Home';
import ManagementScreen from './ManagementScreen';
import NewsFeed from './NewsFeed';

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
          <Stack.Screen name="Main" component={MainScreens} />
          <Stack.Screen name="NewsFeed" component={NewsFeed} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const MainScreens = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="white" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} navigation={props.navigation} />}
        </Stack.Screen>
      </Stack.Navigator>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
