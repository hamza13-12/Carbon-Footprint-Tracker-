import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';


const AccountCreationScreen = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    console.log('Name:', name);
    console.log('Email Address:', email);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.backgroundImage}>
      <ImageBackground source={require("./assets/bg.png")} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.heading}>Create An Account</Text>
      <Text style={styles.inputs}>Name </Text>
      <TextInput
        color="white"
        style={styles.input}
        placeholder="      "
        value={name}
        onChangeText={(text) => setname(text)}
      />
      <Text style={styles.inputs}>Email Address</Text>
      <TextInput
        color="white"
        style={styles.input}
        placeholder="       "
        value={email}
        onChangeText={(text) => setEmail(text)}
        
      />
      <Text style={styles.inputs}>Username</Text>
      <TextInput
        color="white"
        style={styles.input}
        placeholder="       "
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.inputs}>Password</Text>
      <TextInput
        color="white"
        style={styles.input}
        placeholder="        "
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}> 
  
        <Text style={styles.signup}>Sign Up</Text>
      </TouchableOpacity>   
      <Button title='Login' color='white'fontSize='10' opacity='0.5'></Button>
     </View>
    </ImageBackground> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width:344,
    height:500,
    marginTop:100,
    marginLeft:24,
    marginBottom:188,
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
    fontSize: 25,
    // fontstyle: 'bold',
    fontWeight: 'bold',
    marginTop:0,
    marginBottom:10,
    color: 'white'
  },
  input: {
    borderRadius: 50,
    width: '100%',
    height: 40,
    backgroundColor:'rgba(163,241,162,0.28)',
    borderWidth: 0,
    marginBottom: 8,
    padding: 8,
  },
  inputs:{
    marginTop:10,
    fontSize:15,
    alignItems: 'center',
    padding: 6,
    color:'white'
  },
  button:{
    
    backgroundColor: 'rgba(51, 74, 0, 0.51)',
    borderRadius:20,
    height:30,
    width:130,
    textAlign:'center',
    justifyContent:'center'
  },
  signup:{
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
  }

  
});

export default AccountCreationScreen;

