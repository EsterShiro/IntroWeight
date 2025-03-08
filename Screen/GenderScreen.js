import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GenderScreen() {
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your Gender?</Text>
      <TouchableOpacity
        style={[styles.optionButton, selectedGender === 'Male' && styles.selectedButton]}
        onPress={() => setSelectedGender('Male')}
      >
        <Text style={styles.optionText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, selectedGender === 'Female' && styles.selectedButton]}
        onPress={() => setSelectedGender('Female')}
      >
        <Text style={styles.optionText}>Female</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, selectedGender === 'Unspecified' && styles.selectedButton]}
        onPress={() => setSelectedGender('Unspecified')}
      >
        <Text style={styles.optionText}>Unspecified</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  optionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});