/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StatusBar,
  FlatList,
} from 'react-native';

const App: () => React$Node = () => {
  const [list, setList] = useState(['aa', 'bb']);
  const [inputValue, setInputValue] = useState('');

  function handlePress() {
    if (inputValue && inputValue.length > 0) {
      setList(list => [...list, inputValue]);
      setInputValue('');
    }
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              value={inputValue}
              onChangeText={(value) => setInputValue(value)}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handlePress()}>
            <Text style={{color: 'white', fontSize: 16}}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <View>
          {list.map((element) => (
            <Text key={element}>{element}</Text>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textInputContainer: {
    width: '75%',
    borderRadius: 15,
    borderWidth: 2,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    borderColor: '#c1c1c1',
  },
  textInputStyle: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '20%',
    height: '100%',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 15,
  }
});

export default App;
