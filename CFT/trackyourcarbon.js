import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, Button, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
const DashboardScreen = () => {
    const Trackcarbon = () => {
      };
    return (<View style={styles.backgroundImage}>
        <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
        <View style={styles.container}>
            <Text style={styles.heading}>Carbon FootPrint Tracker</Text>
        <Text style={styles.content}>Track your daily carbon emissions and take action to reduce your impact on the environment. Log your daily activities such as transportation, energy use, and food consumption, and calculate your carbon footprint based on industry-standard emissions.</Text> 
        <TouchableOpacity style={styles.button} onPress={Trackcarbon}> 
        <Text style={styles.track}>Track Your Carbon Footprint</Text>
        </TouchableOpacity> 
        </View>
            <View style={styles.container2}>
                <Text style={styles.content2}>Carbon Footprint Over Time</Text>
                <Text style={styles.content3}>View Data:</Text>
                <Text style={styles.content4}>Total Emission:</Text>
            </View>
            
            </ImageBackground>
            </View>);};
        const styles = StyleSheet.create({
            container: {
              width:359,
              height:200,
            marginTop:500,
            marginLeft:24,
            //   marginBottom:600,
            marginRight:100,
              backgroundColor:'rgba(4,118,70,0.24)',
              opacity:1,
              justifyContent: 'center',
              //alignItems: 'center',
              padding: 16,
              color:'white',
              
            },
            heading: {
              fontSize: 20,
              // fontstyle: 'bold',
              fontWeight: 'bold',
            marginTop:3,
            marginBottom:10,
              color: 'white',
              textAlign:'left'
            },
            button:{
              backgroundColor: 'rgba(51, 74, 0, 0.51)',
              borderRadius:20,
              height:30,
              width:280,
              textAlign:'center',
              justifyContent:'center' ,
              alignItems:'center',  
              marginLeft:25 
            },
            track:{
              fontSize:15,
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
            container2:{
            width:359,
            height:271,
              marginBottom:600,
                marginTop:10,
                marginLeft:24,

            backgroundColor:'rgba(4,118,70,0.24)',
              opacity:1,
              justifyContent: 'center',
            //   alignItems: 'center',
              padding: 16,
              color:'white'

            },
            content:{
                marginBottom:15,
                marginTop:2,
                color:'white',
                opacity:0.75

            },
            content2:{
                fontSize: 20,
              // fontstyle: 'bold',
              fontWeight: 'bold',
            marginTop:50,
            marginBottom:10,
              color: 'white',
              textAlign:'left'
            },
            content3:{
                fontSize:15,
                color:'white',
                opacity:0.75,
                marginBottom:10
            },
            content4:{
                fontSize:15,
                color:'white',
                opacity:0.75,
                marginBottom:220,
                marginLeft:160

            }

          
            
          });
          
export default DashboardScreen;
=======
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
    marginTop:20,
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
    marginBottom:50,
    color: 'white'
  },
  input: {
    borderRadius: 50,
    width: '100%',
    height: 50,
    backgroundColor:'rgba(163,241,162,0.28)',
    borderWidth: 0,
    marginBottom: 45,
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
    marginBottom:0,
    marginTop:150,
    fontSize:15,
    marginLeft:40,
    color:'white',
    opacity:0.75
  },
  screen:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
    color:'white'
  }
});

export default TrackcarbonScreen;
>>>>>>> c3aaaadc28a8ad48bf2903f4c6f4d5d82ff81ced


