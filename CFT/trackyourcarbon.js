import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';


const TrackcarbonScreen = () => {
  const [transportation, settransport] = useState('');
  const [energyuse, setenergy] = useState('');
  const [food, setfood] = useState('');

  const handletrackcarbon = () => {
    console.log('Transportation:', transportation);
    console.log('Energy Use:', energyuse);
    console.log('Food Consumption:', food);
  };
  const backbutton = () => {
};
  return (
    <View style={styles.backgroundImage}>
      <ImageBackground source={require("../assets/bg.png")} style={styles.backgroundImage}>
      <TouchableOpacity style={styles.screen} onPress={backbutton}>
          <Text style={styles.screenname}>Tracker</Text>
        </TouchableOpacity>
    <View style={styles.container}>
      <Text style={styles.heading}>Track Your Carbon Footprint</Text>
      <TextInput
        color="white"
        style={styles.input}
        placeholder="Transportation"
        placeholderTextColor={' rgba(255, 255, 255, 0.5)'}
        value={transportation}
        onChangeText={(text) => settransport(text)}
      />
      <TextInput
        color="white"
        style={styles.input}
        placeholder="Energy Use"
        placeholderTextColor={' rgba(255, 255, 255, 0.5)'}
        value={energyuse}
        onChangeText={(text) => setenergy(text)}
        
      />
      <TextInput
        color="white"
        style={styles.input}
        placeholder="Food Consumption"
        placeholderTextColor={' rgba(255, 255, 255, 0.5)'}
        
        value={food}
        onChangeText={(text) => setfood(text)}
      />
  

      <TouchableOpacity style={styles.button} onPress={handletrackcarbon}> 
  
        <Text style={styles.entry}>Add Entry</Text>
      </TouchableOpacity>   
      
    </View>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width:344,
    height:450,
    marginTop:100,
    marginLeft:24,
    marginBottom:280,
    marginRight:32,
    backgroundColor:'rgba(4,118,70,0.24)',
    opacity:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    color:'white',
    borderRadius:50
  },
  heading: {
    fontSize: 20,
    // fontstyle: 'bold',
    fontWeight: 'bold',
    marginTop:0,
    marginBottom:40,
    color: 'white'
  },
  input: {
    borderRadius: 50,
    width: '100%',
    height: 50,
    backgroundColor:'rgba(163,241,162,0.28)',
    borderWidth: 0,
    marginBottom: 40,
    padding: 4,
  },

  button:{
    backgroundColor: 'rgba(51, 74, 0, 0.51)',
    borderRadius:20,
    height:40,
    width:130,
    textAlign:'center',
    justifyContent:'center'

  },
  entry:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    opacity:0.75



  },
  backgroundImage: {
    flex: 1,
    width: 400,
    height: 938,
    justifyContent: 'center',
  },
  screenname:{
    textAlign:'left',
    marginBottom:5,
    marginTop:10,
    fontSize:20,
    color:'white',
  },
  screen:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
    color:'white'
  }

  
});

export default TrackcarbonScreen;

