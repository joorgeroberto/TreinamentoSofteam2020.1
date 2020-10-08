import React from 'react';
import {View, Text} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

export const DrawerContent = (props) => {
  return (
    <View>
      <DrawerItems {...props} />
    </View>
  )
}
