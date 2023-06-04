import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { auth } from './firebase';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Retrieve user data from Firebase
    const user = auth.currentUser;
    if (user) {
      // User is signed in
      setUserName(user.displayName);
      setUserEmail(user.email);
    } else {
      // No user is signed in
      setUserName('');
      setUserEmail('');
    }
  }, []);

  const updateinfo = () => {
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <View style={styles.backgroundImage}>
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
        <View style={styles.container}>
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.circleContainer}>
              {profileImage ? (
                <Image source={{ uri: profileImage }} style={styles.profileImage} />
              ) : (
                <View style={styles.circle} />
              )}
            </View>
          </TouchableOpacity>
          <View style={styles.c2}>
            <Text style={[styles.heading, { marginLeft: 15 }]}>{userName}</Text>
            <Text style={[styles.content, { marginLeft: 15 }]}>{userEmail}</Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.content2}>Carbon Footprint Progress</Text>
          <Text style={styles.content3}>You have successfully reduced your carbon footprint by 23% since last week!</Text>
          <View style={styles.bullet}>
            <Text style={styles.content4}>{'\u2B24'} 10% reduction in transportation </Text>
            <Text style={styles.content4}>{'\u2B24'} 3% reduction in food consumption </Text>
            <Text style={styles.content4}>{'\u2B24'} 10% reduction in energy use </Text></View>
          <TouchableOpacity style={styles.button} onPress={updateinfo}>
            <Text style={styles.updateinfo}>Update User Information</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>);
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    height: 100,
    marginTop: 400,
    alignSelf: 'center',
    backgroundColor: 'rgba(163, 241, 162, 0.28)',
    opacity: 1,
    alignItems: 'center',
    padding: 8,
    borderRadius: 50
  },
  heading: {
    fontSize: 20,
    // fontstyle: 'bold',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: 'white'
  },
  button: {
    //   backgroundColor: 'rgba(51, 74, 0, 0.51)',
    //   borderRadius:20,
    //   height:30,
    //   width:280,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25
  },
  updateinfo: {
    fontSize: 20,
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
    textAlign: 'center',
    opacity: 1,
    marginRight: 30,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 350,
    height: 250,
    marginBottom: 600,
    marginTop: 10,
    borderRadius: 39,
    backgroundColor: ' rgba(4, 118, 70, 0.54)',
    opacity: 1,
    justifyContent: 'center',
    //   alignItems: 'center',
    padding: 16,
    color: 'white'
  },
  content: {
    marginRight: 5,
    marginBottom: 20,
    marginTop: 0,
    color: 'white',
    opacity: 0.75
  },
  circle: {
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: 'grey'
  },
  content2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  content3: {
    fontSize: 15,
    color: 'white',
    opacity: 0.75,
    marginBottom: 20
  },
  content4: {
    fontSize: 13,
    color: 'white',
    opacity: 0.75,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30
  },
  bullet: {
    marginBottom: 20
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: 'grey',
    marginLeft: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100 / 2,
    resizeMode: 'cover'
  }
});

export default Profile;
