import React, { memo } from 'react';
import { Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarPlaceHolder from '../Component/StatusBarPlaceHolder';
import styles from './styles';

function Initialiser({ navigation }: any) {


  return (
    <SafeAreaView style={styles.screen} edges={['right', 'left']}>
      <StatusBarPlaceHolder />
      <View style={styles.root}>
        <Button
          title="List View Screen"
          onPress={() => navigation.navigate('ListViewScreen')}
        />
        <View style={styles.space} />
        <Button
          title="Flatten Directory"
          onPress={() => navigation.navigate('FlattenDirectory')}
        />
      </View>
    </SafeAreaView>
  );
}

export default memo(Initialiser);


