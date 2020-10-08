import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button, Header} from '../../../Components';

const InitialTabScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Header title={'Initial Tab Screen'} />
      <Button
        onPress={() => navigation.navigate('Initial')}
        text={'To Initial'}
      />
    </View>
  );
};

export default InitialTabScreen;
