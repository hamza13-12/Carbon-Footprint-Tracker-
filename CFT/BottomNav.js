import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Dashboard" component={Screen2} />
                <Tab.Screen name="Add data" component={Screen3} />
                <Tab.Screen name="Profile" component={Screen4} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const Screen1 = () => {
    return (
        <></>
    );
};

const Screen2 = () => {
    return (
        <></>
    );
};

const Screen3 = () => {
    return (
        <></>
    );
};

const Screen4 = () => {
    return (
        <></>
    );
};

export default BottomNav;