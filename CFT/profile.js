import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


const Profile = () => {

  const updateinfo = () => {

  };
  const backbutton = () => {
  };
  return (
    <View style={styles.backgroundImage}>
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
        <View style={styles.container}>

          <View style={styles.circle}></View>
          <View style={styles.c2}>
            <Text style={styles.heading}>Shaheen Amir</Text>
            <Text style={styles.content}>shaheenamir@gmail.com</Text>
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

    flexDirection: 'row',
    width: 350,
    height: 100,
    marginTop: 400,
    marginLeft: 15,
    marginRight: 50,
    //   marginBottom:600,
    backgroundColor: 'rgba(163, 241, 162, 0.28)',
    opacity: 1,
    //   justifyContent: 'space-between',
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
    marginRight: 50,
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
    width: 350,
    height: 250,
    marginBottom: 600,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 50,
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
    marginLeft: 20,
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: 'grey'
  },
  c2: {
    //flexGrow:10,
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
    marginBottom: 40
  },
});

export default Profile;
