import React, { memo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';


function LoadingSection() {
  return (
    <View style={styles.inner}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
};

export default memo(LoadingSection);