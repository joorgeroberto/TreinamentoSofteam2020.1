/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Input from './Input';
import ButtonComponent from './ButtonComponent';

const App: () => React$Node = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={[styles.label, styles.welcomeLabel, styles.textLabel]}>Bem-vindo,</Text>
          <Text style={styles.label}>Faça login para continuar!</Text>
        </View>
        <Input
          text={'Email'}
          isPassword={false}
          value={email}
          onChange={(value) => {
            setEmail(value);
          }}
        />
        <Input
          text={'Senha'}
          value={senha}
          isPassword={true}
          onChange={(value) => {
            setSenha(value);
          }}
        />
        <View style={styles.buttonsContainer}>
          <ButtonComponent customStyle={{backgroundColor: 'blue'}} onPress={() => {console.log('botão 1')}} text={'Login'} />
          <ButtonComponent onPress={() => {console.log('botão 2')}} text={'Cadastrar'} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  welcomeContainer: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    marginTop: 16,
  },
  label: {
    fontSize: 18,
    color: '#c1c1c1',
  },
  welcomeLabel: {
    fontWeight: 'bold',
    color: 'black',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 40,
    justifyContent: 'space-around',
  },
});

export default App;
