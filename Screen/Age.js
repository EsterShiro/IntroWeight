import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AgeScreen({ navigate }) {
  const [selectedAge, setSelectedAge] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate('Gender')}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>
      <Text style={styles.title}>How old are you?</Text>
      <TouchableOpacity
        style={[styles.optionButton, selectedAge === 'Under 18' && styles.selectedButton]}
        onPress={() => setSelectedAge('Under 18')}
      >
        <Text style={styles.optionText}>Under 18</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, selectedAge === '18-24' && styles.selectedButton]}
        onPress={() => setSelectedAge('18-24')}
      >
        <Text style={styles.optionText}>18-24</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, selectedAge === '25-34' && styles.selectedButton]}
        onPress={() => setSelectedAge('25-34')}
      >
        <Text style={styles.optionText}>25-34</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, selectedAge === '35-44' && styles.selectedButton]}
        onPress={() => setSelectedAge('35-44')}
      >
        <Text style={styles.optionText}>35-44</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, selectedAge === '45+' && styles.selectedButton]}
        onPress={() => setSelectedAge('45+')}
      >
        <Text style={styles.optionText}>45+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigate('Birthday')}>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 40,
    backgroundColor: '#000',
  },
  backButton: {
    color: 'white',
    fontSize: 24,
    marginRight: 10,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    width: '66%',
    height: '100%',
    backgroundColor: 'green',
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 80,
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