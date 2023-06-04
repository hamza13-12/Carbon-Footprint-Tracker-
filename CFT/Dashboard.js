import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';

const DashboardScreen = () => {
  const [carbonData, setCarbonData] = useState([]);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43], 
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  return (
    <View style={styles.backgroundImage}>
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.heading}>Carbon FootPrint Tracker</Text>
          <Text style={styles.content}>Track your daily carbon emissions and take action to reduce your impact on the environment. Log your daily activities such as transportation, energy use, and food consumption, and calculate your carbon footprint based on industry-standard emissions.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.track}>Track Your Carbon Footprint</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <BarChart
            data={data}
            width={300}
            height={220}
            yAxisLabel="$"
            verticalLabelRotation={30}
            chartConfig={chartConfig}
          />
        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 359,
    height: 200,
    marginTop: 550,
    marginLeft: 24,
    //   marginBottom:600,
    marginRight: 100,
    backgroundColor: 'rgba(4,118,70,0.24)',
    opacity: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    padding: 16,
    color: 'white',

  },
  heading: {
    fontSize: 20,
    // fontstyle: 'bold',
    fontWeight: 'bold',
    marginTop: 3,
    marginBottom: 10,
    color: 'white',
    textAlign: 'left'
  },
  button: {
    backgroundColor: 'rgba(51, 74, 0, 0.51)',
    borderRadius: 20,
    height: 30,
    width: 280,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25
  },
  track: {
    fontSize: 15,
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
  container2: {
    width: 359,
    height: 271,
    marginBottom: 600,
    marginTop: 10,
    marginLeft: 24,

    backgroundColor: 'rgba(4,118,70,0.24)',
    opacity: 1,
    justifyContent: 'center',
    //   alignItems: 'center',
    padding: 16,
    color: 'white'

  },
  content: {
    marginBottom: 15,
    marginTop: 2,
    color: 'white',
    opacity: 0.75

  },
  content2: {
    fontSize: 20,
    // fontstyle: 'bold',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    position: "absolute",
    top: 10,
    marginHorizontal: 80,
  },
  content3: {
    fontSize: 15,
    color: 'white',
    opacity: 0.75,
    marginBottom: 10
  },
  content4: {
    fontSize: 15,
    color: 'white',
    opacity: 0.75,
    marginBottom: 220,
    marginLeft: 160

  }



});

export default DashboardScreen;
