import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';

export default function HomeScreen({ navigate }) {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Weight Training</Text>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Gender')}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>I have read and agreed to the terms and conditions</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 50,
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
  },
  bottomContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    color: 'white',
  },
});