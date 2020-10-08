import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Button, Header} from '../../../Components';

const SecondSwitchScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Header title={'Second Switch Screen'} />
      <Button onPress={() => navigation.navigate('Drawer')} text={'To Drawer Navigator'} />
    </View>
  );
};

export default SecondSwitchScreen;
