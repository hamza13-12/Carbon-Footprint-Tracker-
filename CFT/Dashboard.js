import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';
import { getAuth } from 'firebase/auth';


const DashboardScreen = () => {
  const [carbonData, setCarbonData] = useState([]);
  const [isDataGenerated, setIsDataGenerated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const user = getAuth().currentUser;

      if (user) {
        const userId = user.uid;

        const q = query(
          collection(db, 'entries'),
          where('userId', '==', userId),
          orderBy('dayOfWeek', 'asc'),
          limit(5)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setCarbonData(data);
      }
    };

    fetchData();
  }, []);

  const getUniqueDaysOfWeek = (carbonData) => {
    const daysOfWeek = carbonData.map((item) => item.dayOfWeek);
    return [...new Set(daysOfWeek)];
  };

  const generateData = () => {
    setIsDataGenerated(true);
  };

  const renderGraph = () => {
    if (!isDataGenerated) {
      return null;
    }

    const data = {
      labels: getUniqueDaysOfWeek(carbonData),
      datasets: [
        {
          data: carbonData.map((item) => item.totalEmission),
        }
      ],
    };

    const chartConfig = {
      backgroundGradientFrom: '#E2CD96',
      backgroundGradientTo: '#7A693E',
      borderRadius: 43,
      color: (opacity = 1) => `rgba(124, 23, 23)`,
    };

    return (
      <View style={styles.container2}>
        <BarChart
          data={data}
          width={300}
          height={220}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
        />
      </View>
    );
  };

  return (
    <View style={styles.backgroundImage}>
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.heading}>Carbon FootPrint Tracker</Text>
          <Text style={styles.content}>Track your daily carbon emissions and take action to reduce your impact on the environment. Log your daily activities such as transportation, energy use, and food consumption, and calculate your carbon footprint based on industry-standard emissions.</Text>
          <TouchableOpacity style={styles.button} onPress={generateData}>
            <Text style={styles.track}> Generate Carbon FootPrint</Text>
          </TouchableOpacity>
        </View>
        {renderGraph()}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 359,
    height: 200,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: 'rgba(4,118,70,0.24)',
    opacity: 1,
    padding: 16,
    color: 'white',
    position: "absolute",
    top: 73,
  },
  container2: {
    display: "flex",
    width: 359,
    height: 271,
    marginTop: 170,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: 'rgba(4,118,70,0.24)',
    opacity: 1,
    justifyContent: 'center',
    padding: 16,
    color: 'white'
  },
  heading: {
    fontSize: 20,
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
  content: {
    marginBottom: 15,
    marginTop: 2,
    color: 'white',
    opacity: 0.75
  },
});

export default DashboardScreen;
