import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button, Header} from '../../../Components';

const InitialDrawerScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Header title={'Initial Drawer Screen'} />
      <Button
        onPress={() => navigation.navigate('SecondDrawerScreen')}
        text={'To Second Drawer Screen'}
      />
      <Button
        style={{marginTop: 20}}
        onPress={navigation.openDrawer}
        text={'Open Drawer'}
      />
    </View>
  );
};

export default InitialDrawerScreen;
