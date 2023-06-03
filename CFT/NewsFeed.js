import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground, Linking } from 'react-native';
import axios from 'axios';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=carbon%20emissions&sortBy=publishedAt&apiKey=d7ec68c3e18d4edaab678d9fa6977876'
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL(item.url)}>
      <ImageBackground source={require("./assets/Card.png")} style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>{item.description}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='white' />
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
        <Text style={styles.heading}>Latest Feed</Text>
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: '#fff',
  },
  cardContainer: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    resizeMode: 'cover',
    height: 100,
  },
  cardContent: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
});

export default NewsFeed;
