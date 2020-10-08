import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Button, Header} from '../../../Components';

const SecondDrawerScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Header title={'Second Drawer Screen'} />
      <Button onPress={() => navigation.navigate('StackNavigator')} text={'To Stack Navigator'} />
      <Button
        style={{marginTop: 20}}
        onPress={navigation.openDrawer}
        text={'Open Drawer'}
      />
    </View>
  );
};

export default SecondDrawerScreen;
