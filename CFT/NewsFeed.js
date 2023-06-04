import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground, Linking } from 'react-native';
import axios from 'axios';

const NewsFeed = () => {
    // Define a state variable called "articles" and initialize it to an empty array
    const [articles, setArticles] = useState([]);

    // Use the useEffect hook to fetch articles when the component mounts
    useEffect(() => {
        fetchArticles();
    }, []);

    // Define a function to fetch articles from the News API
    const fetchArticles = async () => {
        try {
            const response = await axios.get(
                'https://newsapi.org/v2/everything?q=carbon%20emissions&sortBy=publishedAt&apiKey=d7ec68c3e18d4edaab678d9fa6977876'
            );
            // Update the "articles" state variable with the fetched articles
            setArticles(response.data.articles);
        } catch (error) {
            console.error(error);
        }
    };

    // Define a function to render each news item
    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL(item.url)}>
            <View style={styles.cardContainer}>
                <ImageBackground source={require("./assets/Card.png")} style={styles.cardBackground}>
                    <View style={styles.cardContent}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: item.urlToImage }} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );

    // Render the news feed screen
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

// Define the styles for the news feed screen
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
        marginTop: 60,
        marginBottom: 10,
        color: '#fff',
    },
    cardContainer: {
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        height: 100,
    },
    cardBackground: {
        flex: 1,
        flexDirection: 'row',
        resizeMode: 'cover',
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    imageContainer: {
        width: 80,
        height: '100%',
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
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
