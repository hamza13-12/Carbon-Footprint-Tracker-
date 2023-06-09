import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import BottomNav from './BottomNav';

export default function App() {

  const { width, height } = Dimensions.get('window');
  const cardWidth = Math.min(width, height) * 0.8;
  const cardHeight = cardWidth * 0.5;

  const navigation = useNavigation();

  const reduce = () => {
    navigation.navigate('NewsFeed');
  };

  const connect = () => {
    const facebookGroupURL = 'https://www.facebook.com/groups/421847534837144';
    Linking.openURL(facebookGroupURL);
  };

  const start_track = () => {
    navigation.navigate('TrackcarbonScreen');
  };


  return (
    <View style={styles.container}>

      <StatusBar style="light" backgroundColor='white' />
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
        
        <View style={[styles.cardContainer, { marginTop: 40 }]} >
          <Image source={require("./assets/Card.png")} style={[styles.cardImage, { width: cardWidth, height: cardHeight }]} />
          <View style={styles.cardContent}>
            <Text style={styles.cardText}> Track Your Carbon Footprint </Text>
            <Text style={styles.cardDescription}> Log your daily activities such as </Text>
            <Text style={styles.cardDescription}> transportation, energy use, and food  </Text>
            <Text style={styles.cardDescription}> consumption, and calculate your carbon </Text>
            <Text style={styles.cardDescription}> footprint based on industry-standard </Text>
            <Text style={styles.cardDescription}> emissions data. </Text>
          </View>
        </View>


        <TouchableOpacity onPress={reduce} activeOpacity={0.7}>
          <View style={styles.cardContainer}>
            <Image source={require("./assets/Card.png")} style={[styles.cardImage, { width: cardWidth, height: cardHeight }]} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}> Embrace a Green Lifestyle </Text>
              <Text style={styles.cardDescription}> Catch up on the latest news and gain </Text>
              <Text style={styles.cardDescription}> the knowledge necessary to reduce  </Text>
              <Text style={styles.cardDescription}> your carbon footprint over time.  </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={connect} activeOpacity={0.7}>
          <View style={styles.cardContainer}>
            <Image source={require("./assets/Card.png")} style={[styles.cardImage, { width: cardWidth, height: cardHeight }]} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}> Connect with Others </Text>
              <Text style={styles.cardDescription}> Join a community of like-minded individuals </Text>
              <Text style={styles.cardDescription}> who are committed to reducing their carbon </Text>
              <Text style={styles.cardDescription}> footprint and making a positive impact on the </Text>
              <Text style={styles.cardDescription}> environment. </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.trackButton} onPress={start_track} activeOpacity={0.7}>
          <Text style={styles.cardDescription}>Start Tracking</Text>
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
    marginBottom: 20,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    borderRadius: 20,
  },
  cardContent: {
    position: 'absolute',
    top: 0,
    left: 45,
    right: 0,
    alignItems: 'left',
    paddingTop: 20,
  },
  cardText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
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
  adContainer: {
    height: 90,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDescription: {
    fontSize: 15,
    fontWeight: 'light',
    color: '#fff',
  },
  trackButton: {
    width: 146,
    height: 44,
    borderRadius: 20,
    backgroundColor: '#3D5900',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
});
