import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, Keyboard, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { auth } from './firebase';
//import TrackcarbonScreen from './TrackcarbonScreen';
// import { AdMobBanner } from 'react-native-admob';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [transportationData, setTransportationData] = useState('');
  const [foodconsumptionData, setfoodData] = useState('');
  const [energyData, setenergyData] = useState('');
  const [changepasswordData, setnewpassData] = useState('');



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
    // const AdBanner = () => {
    //   return (
    //     <View>
    //       <AdMobBanner
    //         adSize="smartBanner"
    //         adUnitID=""
    //         testDevices={[AdMobBanner.simulatorId]}
    //         onAdFailedToLoad={(error) => console.error(error)}
    //       />  </View>
    //       );
    //     };
  }, []);
  const [Visibility, setvisibility] = useState(false)

  const updateinfo = () => {
    const user = auth.currentUser;

    setvisibility(!Visibility);
    if (changepasswordData) {
      user.updatePassword(changepasswordData)
        .then(() => {
          setnewpassData('');

        })

    }

  };
  const UpdatedData = () => {
    const transportation = auth.transportation;
    const reduction = transportationData ? ((transportationData - transportation) / transportationData) * 100 : 0;
    const change = reduction >= 0 ? `Increased of ${Math.abs(reduction)}%` : `Decreased of ${Math.abs(reduction)}%`;
    setTransportationData(change);
    const fooduse = auth.foodConsumption;
    const reducedfood = foodconsumptionData ? ((foodconsumptionData - fooduse) / foodconsumptionData) * 100 : 0;
    const foodchange = reducedfood >= 0 ? `Increased of ${Math.abs(reducedfood)}%` : `Decreased of ${Math.abs(reducedfood)}%`;
    setfoodData(foodchange);
    const energyuse = auth.Energyuse;
    const reducedenergy = energyData ? ((energyData - energyuse) / energyData) * 100 : 0;
    const energychange = reducedenergy >= 0 ? `Increased of ${Math.abs(reducedenergy)}%` : `Decreased of ${Math.abs(reducedenergy)}%`;
    setenergyData(energychange);
  };
  //UpdatedData()
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
            <Text style={styles.content4}>{'\u2B24'} {transportationData} in transportation </Text>
            <Text style={styles.content4}>{'\u2B24'} {foodconsumptionData} in food consumption </Text>
            <Text style={styles.content4}>{'\u2B24'} {energyData} in energy use </Text></View>
          <Modal

            animationType="slide"
            transparent={true}
            visible={Visibility}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setvisibility(!Visibility);
            }}>
            <View style={styles.modalcontainer}>
              <Text style={styles.heading2}>Update your Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder=" Enter New Password"
                placeholderTextColor={' rgba(255, 255, 255, 0.8)'}


                value={changepasswordData}
                onChangeText={setnewpassData}></TextInput>

              <View style={styles.buttons}>
                <TouchableOpacity style={styles.cancel} onPress={() => updateinfo}>
                  <Text style={styles.updateinfo}>cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancel} onPress={() => setvisibility(!Visibility)}>
                  <Text style={styles.updateinfo}>done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <TouchableOpacity style={styles.button} onPress={() => setvisibility(!Visibility)}>
            <Text style={styles.updateinfo}>Update User Information</Text>
          </TouchableOpacity>

        </View>
        <View>
          <Image
            source={require("./assets/Google-Ads.jpg")}
            style={styles.googleadd}
          />
        </View>
        {/* <AdBanner /> */}
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
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: 'white'
  },
  button: {
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
    marginBottom: 120,
    marginTop: 10,
    borderRadius: 39,
    backgroundColor: ' rgba(4, 118, 70, 0.54)',
    opacity: 1,
    justifyContent: 'center',
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
  },
  googleadd: {
    marginBottom: 350,
    marginLeft: 15,
    height: 75,
    width: 350
  },
  input: {
    marginTop: 20,
    borderRadius: 50,
    width: '80%',
    height: 50,
    marginBottom: 20,
    backgroundColor: 'rgba(163,241,162,0.6)',
    borderWidth: 0,
    marginBottom: 10
  },
  modalcontainer: {
    height: 240,
    width: 350,
    marginTop: 160,
    marginLeft: 10,
    marginBottom: 100,
    backgroundColor: 'rgba(4, 118, 70, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  cancel: {
    color: 'white',
    opacity: 0.7,
    marginTop: 20


  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',

  },
  heading2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'

  }
});

export default Profile;
