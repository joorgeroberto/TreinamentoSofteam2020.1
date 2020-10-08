import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button, Header} from '../../../Components';

const ThirdTabScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Header title={'Third Tab Screen'} />
      <Button
        onPress={() => navigation.navigate('Initial')}
        text={'To Initial'}
      />
    </View>
  );
};

export default ThirdTabScreen;
