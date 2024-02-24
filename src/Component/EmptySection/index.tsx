import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export interface Props {
  message: String
}

function EmptySection({ message }: Props) {
  return (
    <View style={styles.inner}>
      <Text style={styles.text}>An error occurred:  {message}.</Text>
    </View>
  )
};

export default memo(EmptySection);