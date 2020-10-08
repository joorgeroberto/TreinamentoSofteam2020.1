import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Button, Header} from '../../../Components';

const SecondTabScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Header title={'Second Tab Screen'} />
      <Button
        onPress={() => navigation.navigate('Initial')}
        text={'To Initial'}
      />
    </View>
  );
};

export default SecondTabScreen;
