import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../Components';

const InitialDrawerScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Button
        onPress={() => navigation.navigate('SecondSwitchScreen')}
        text={'To Second'}
      />
    </View>
  );
};

export default InitialDrawerScreen;
