import React, { useState } from 'react';
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
              width: '100%',
              height: '100%',
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
