import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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

      <Button title="Sign Up" onPress={handleCreateAccount}color="white"/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    color:'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'white'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  inputs:{
    fontSize:15,

    alignItems: 'center',
    padding: 16,
    color:'white'
  }

  
});

export default AccountCreationScreen;

