import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonComponent = ({text, onPress, customStyle}) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.container, customStyle]}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 40,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  }
})

export default ButtonComponent;
