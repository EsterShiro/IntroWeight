import React from 'react';
import { View, StyleSheet} from 'react-native';

import Home from './home';
import ButtomTab from './buttonTab'


const app = () => {

  return (
    <View style ={styles.container}>
      
        <ButtomTab/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    opacity: 0.97,
    
  }

});

export default app;