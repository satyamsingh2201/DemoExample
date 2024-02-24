import React, { memo } from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';

function StatusBarPlaceHolder() {
  return (
    <View style={styles.statusBar} >
      <StatusBar animated
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
    </View>
  );
};

export default memo(StatusBarPlaceHolder);
