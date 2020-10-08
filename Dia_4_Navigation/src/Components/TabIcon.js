import React from 'react';
import {View, Text} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

export const TabIcon = ({color}) => {
  return (
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: color,
      }}
    />
  );
};
