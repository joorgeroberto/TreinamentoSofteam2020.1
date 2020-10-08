import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../Components';

const InitialStackScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Button
        onPress={() => navigation.navigate('SecondStackScreen')}
        text={'To Second Screen'}
      />
    </View>
  );
};

export default InitialStackScreen;
