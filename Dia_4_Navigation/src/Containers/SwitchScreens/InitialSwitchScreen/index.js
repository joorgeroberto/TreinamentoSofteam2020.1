import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button, Header} from '../../../Components';

const InitialSwitchScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Header title={'Initial Switch Screen'} />
      <Button
        onPress={() => navigation.navigate('SecondSwitchScreen')}
        text={'To Second Switch Screen'}
      />
    </View>
  );
};

export default InitialSwitchScreen;
