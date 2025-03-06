import React from 'react';
import { View, StyleSheet} from 'react-native';
import Home from './home';

const app = () => {

  return (
    <View style ={styles.container}>
      <Home/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'aliceblue',
  }

})

export default app;