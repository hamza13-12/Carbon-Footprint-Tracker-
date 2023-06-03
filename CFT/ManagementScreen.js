import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native';
import Home from './Home';
import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');
const cardWidth = Math.min(width, height) * 0.9;
const cardHeight = cardWidth * 0.6;

export default function App() {
    const backNav = () => {
        //Implement back navigation logic here
    }

    const new_goals = () => {
        //Implement new goals button logic here
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor='white' />
            <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.backButton} onPress={backNav} activeOpacity={0.7}>
                    <Text style={styles.backButtonText}>&lt; Management</Text>
                </TouchableOpacity>

                <View style={styles.cardContainer}>
                    <Image source={require("./assets/CardB.png")} style={[{ width: cardWidth, height: cardHeight }]} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>Carbon Emission Reduction Goals </Text>
                        <Text style={styles.cardDescription}> Reduce Carbon Emissions by </Text>
                        <Text style={styles.cardDescription}> 20% by the end of the year. </Text>
                        <Progress.Bar
                            style={styles.progressBar}
                            color={'#D6BE81'}
                            progress={0.5}
                            width={200}
                            height={32}
                            borderRadius={7}
                            unfilledColor='#6B714B'
                        />
                        <TouchableOpacity style={styles.goalsButton} onPress={new_goals} activeOpacity={0.7}>
                            <Text style={styles.cardDescription}>Start Tracking</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity activeOpacity={0.7}>
                    <View style={[styles.cardContainer, { marginTop: 20 }]}>
                        <Image source={require("./assets/CardB.png")} style={[{ width: cardWidth, height: 113 }]} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardText}> Achievements </Text>
                            <Text style={styles.cardDescription}> Track and showcase completed challenges, </Text>
                            <Text style={styles.cardDescription}> badges, and milestones. </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                    <View style={[styles.cardContainer, { marginTop: 20 }]}>
                        <Image source={require("./assets/CardB.png")} style={[{ width: cardWidth, height: 113 }]} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardText}> Awards </Text>
                            <Text style={styles.cardDescription}> Gain inspiration for future success by checking </Text>
                            <Text style={styles.cardDescription}> your awards. </Text>
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
        alignItems: 'center',
        marginTop: -80,
    },
    cardContent: {
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        left: 10,
        top: 20,
    },
    cardText: {
        fontSize: 19,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 15,
        fontWeight: 'light',
        color: '#fff',
    },
    backButton: {
        position: 'absolute',
        left: 15,
        top: 30,
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'light',
        color: '#fff',
    },
    progressBar: {
        marginTop: 20,
        borderRadius: 7,
    },
    goalsButton: {
        width: 285,
        height: 44,
        borderRadius: 20,
        marginTop: 25,
        marginHorizontal: 34,
        backgroundColor: '#3D5900',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
});
