import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../Components';

const SecondSwitchScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Button onPress={() => navigation.navigate('Drawer')} text={'Back'} />
    </View>
  );
};

export default SecondSwitchScreen;
