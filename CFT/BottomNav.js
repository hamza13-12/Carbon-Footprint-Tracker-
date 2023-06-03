import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import { Image } from 'react-native';
import DashboardScreen from './Dashboard'
import TrackcarbonScreen from './TrackcarbonScreen';

const Tab = createBottomTabNavigator();

const iconMapping = {
    'Home': require('./assets/home-icon.png'),
    'Dashboard': require('./assets/dashboard-icon.png'),
    'Add data': require('./assets/add-data.png'),
    'Profile': require('./assets/profile.png'),
};

const BottomNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: { backgroundColor: 'rgba(4, 41, 39, 1)', paddingBottom: 4, paddingVertical: 10, borderTopWidth: 2, height: 55 },
                    tabBarLabelStyle: {color: '#ffffff', marginTop: 8, fontSize: 10, fontWeight: 'light'},
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = '';

                        if (route.name in iconMapping) {
                            iconName = iconMapping[route.name];
                        }

                        let iconColor = focused ? '#4F9643' : '#ffffff';

                        return (
                            <View>
                                <Image
                                    source={iconName}
                                    style={{
                                        width: focused ? 24 : 22,
                                        height: focused ? 24 : 22,
                                        tintColor: iconColor,
                                    }}
                                />
                            </View>
                        );
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Dashboard" component={DashboardScreen} />
                <Tab.Screen name="Add data" component={TrackcarbonScreen} />
                <Tab.Screen name="Profile" component={Screen4} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const Screen4 = () => {
    return (
        <></>
    );
};

export default BottomNav;