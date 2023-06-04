import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Keyboard } from 'react-native';
import { auth, db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const TrackcarbonScreen = () => {
  const [transportation, settransport] = useState('');
  const [energyuse, setenergy] = useState('');
  const [food, setfood] = useState('');

  const handletrackcarbon = async () => {
    console.log('handletrackcarbon called');
    const currentUser = auth.currentUser;
    const userId = auth.currentUser.uid;
    //In Firebase Authentication, each user has a unique identifier (UID) associated with their account.

    console.log('transportation:', transportation);
    console.log('energyuse:', energyuse);
    console.log('food:', food);

    const currentDate = new Date(); // Get the current date

    console.log('date:', currentDate);

    // Save the entry data to Firebase
    try {
      const docRef = await Promise.race([
        addDoc(collection(db, 'entries'), {
          userId,
          transportation,
          energyUse: energyuse,
          foodConsumption: food,
          date: currentDate,
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout')), 10000) // 10 seconds timeout
        ),
      ]);
      console.log('Entry saved with ID: ', docRef.id);
      settransport('');
      setenergy('');
      setfood('');
    } catch (error) {
      console.error('Error adding entry: ', error);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.backgroundImage}>
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.touchable} onPress={dismissKeyboard} activeOpacity={1}>
          <TouchableOpacity style={styles.screen} >
          </TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.heading}>Track Your Carbon Footprint</Text>
            <TextInput
              color="white"
              style={styles.input}
              placeholder="Transportation (km)"
              placeholderTextColor={' rgba(255, 255, 255, 0.5)'}
              value={transportation}
              onChangeText={(text) => settransport(text)}
            />
            <TextInput
              color="white"
              style={styles.input}
              placeholder="Energy Use (kWH)"
              placeholderTextColor={' rgba(255, 255, 255, 0.5)'}
              value={energyuse}
              onChangeText={(text) => setenergy(text)}

            />
            <TextInput
              color="white"
              style={styles.input}
              placeholder="Food Consumption (kg)"
              placeholderTextColor={' rgba(255, 255, 255, 0.5)'}

              value={food}
              onChangeText={(text) => setfood(text)}
            />


            <TouchableOpacity style={styles.button} onPress={handletrackcarbon}>
              <Text style={styles.entry}>Add Entry</Text>
            </TouchableOpacity>

          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width:344,
    height: 450,
    marginTop: 20,
    marginLeft: 24,
    marginBottom: 280,
    marginRight: 32,
    backgroundColor: 'rgba(4,118,70,0.24)',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    color: 'white',
    borderRadius: 50
  },
  heading: {
    fontSize: 20,
    // fontstyle: 'bold',
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 50,
    color: 'white'
  },
  input: {
    borderRadius: 50,
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(163,241,162,0.28)',
    borderWidth: 0,
    marginBottom: 45,
    padding: 4,
  },
  button: {
    backgroundColor: 'rgba(51, 74, 0, 0.51)',
    borderRadius: 20,
    height: 40,
    width: 130,
    textAlign: 'center',
    justifyContent: 'center'
  },
  entry: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    opacity: 0.75
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  screen: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'white',
    textAlign: 'left',
    marginBottom: 0,
    marginTop: 180,
    fontSize: 15,
    marginLeft: 40,
    color: 'white',
    opacity: 0.75
  }
});

export default TrackcarbonScreen;

