import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function BirthdayScreen({ navigate }) {
  const [day, setDay] = useState('01');
  const [month, setMonth] = useState('01');
  const [year, setYear] = useState('2000');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate('Age')}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>
      <Text style={styles.title}>When is your birthday?</Text>
      <Text style={styles.subtitle}>Select your birthday</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={day}
          style={styles.picker}
          onValueChange={(itemValue) => setDay(itemValue)}
          itemStyle={styles.pickerItem}
        >
          {[...Array(31).keys()].map((d) => (
            <Picker.Item key={d} label={`${d + 1}`} value={`${d + 1}`} />
          ))}
        </Picker>
        <Picker
          selectedValue={month}
          style={styles.picker}
          onValueChange={(itemValue) => setMonth(itemValue)}
          itemStyle={styles.pickerItem}
        >
          {[...Array(12).keys()].map((m) => (
            <Picker.Item key={m} label={`${m + 1}`} value={`${m + 1}`} />
          ))}
        </Picker>
        <Picker
          selectedValue={year}
          style={styles.picker}
          onValueChange={(itemValue) => setYear(itemValue)}
          itemStyle={styles.pickerItem}
        >
          {[...Array(100).keys()].map((y) => (
            <Picker.Item key={y} label={`${1900 + y}`} value={`${1900 + y}`} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigate('NextScreen')}>
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
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 80,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    padding: 10,
  },
  picker: {
    flex: 1,
    height: 50,
    color: 'white',
  },
  pickerItem: {
    color: 'white',
    fontSize: 18,
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