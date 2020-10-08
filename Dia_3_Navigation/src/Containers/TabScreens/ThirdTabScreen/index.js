import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../Components';

const InitialTabScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Button
        onPress={() => navigation.navigate('Initial')}
        text={'To Initial'}
      />
    </View>
  );
};

export default InitialTabScreen;
