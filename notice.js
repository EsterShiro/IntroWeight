import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoticeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>หน้า Notice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoticeScreen;