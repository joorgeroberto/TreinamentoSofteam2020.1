import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../Components';

const InitialStackScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Button
        onPress={() => navigation.navigate('Home')}
        text={'SecondStackScreen Screen'}
      />
    </View>
  );
};

export default InitialStackScreen;
