import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../style-guide';

function Divider() {
  return (
    <View
      style={{
        borderBottomColor: colors.gray.black,
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  )
};

export default memo(Divider);