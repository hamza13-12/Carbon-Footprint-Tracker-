import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';


export default function App() {
  const { width, height } = Dimensions.get('window');
  const cardWidth = Math.min(width, height) * 0.8;
  const cardHeight = cardWidth * 0.5;

  const backNav = () => {
    //Implement back navigation logic here
  };

  const track = () => {
    //Implement track card logic here
  };

  const reduce = () => {
    //Implement reduce card logic here
  };

  const connect = () => {
    //Implement connect card logic here
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='white' />
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.backButton} onPress={backNav} activeOpacity={0.7}>
          <Text style={styles.backButtonText}>&lt; Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={track} activeOpacity={0.7}>
          <View style={styles.cardContainer}>
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
        </TouchableOpacity>

        <TouchableOpacity onPress={reduce} activeOpacity={0.7}>
          <View style={styles.cardContainer}>
            <Image source={require("./assets/Card.png")} style={[styles.cardImage, { width: cardWidth, height: cardHeight }]} />
            <View style={styles.cardContent}>
              <Text style={styles.cardText}> Reduce Your Impact </Text>
              <Text style={styles.cardDescription}> Get personalized recommendations for </Text>
              <Text style={styles.cardDescription}> reducing your carbon footprint and track  </Text>
              <Text style={styles.cardDescription}> your progress over time.  </Text>
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
    top: 28,
    left: 15
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
  }
});
