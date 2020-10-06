import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({text, onChange, value, isPassword}) => {
  return (
    <>
      <Text style={styles.textStyle}>{text}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          value={value}
          secureTextEntry={isPassword}
          onChangeText={(texto) => onChange(texto)}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
  },
  inputStyle: {
    width: '100%',
    height: '100%',
  },
  textStyle: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 20,
  }
})

export default Input;
