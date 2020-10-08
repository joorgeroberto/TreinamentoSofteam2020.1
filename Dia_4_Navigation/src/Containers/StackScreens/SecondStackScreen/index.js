import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../Components';

const SecondStackScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Button onPress={() => navigation.navigate('BottomTabNavigator')} text={'To Bottom Tab Navigator'} />
    </View>
  );
};

export default SecondStackScreen;
