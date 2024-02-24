import React, { memo } from 'react';
import { View } from 'react-native';
import styles from './styles';
import FlattenDirectoryScreen from './flattenDirectory';
import { directory } from '../../style-guide/common';


function FlattenDirectoryContainer() {

  const flattenDirectory = (directory: any, path = '') => {
    let result: any = [];
    directory.forEach((item: any) => {
      const itemPath = path === '' ? item.name : `${path}/${item.name}`;
      if (item.children.length === 0) {
        result.push(itemPath);
      } else {
        result = result.concat(flattenDirectory(item.children, itemPath));
      }
    });
    return result.sort();
  };

  const flattenedDirectory = flattenDirectory(directory);

  return (
    <View style={styles.inner}>
      <FlattenDirectoryScreen data={flattenedDirectory} />
    </View>
  )
};

export default memo(FlattenDirectoryContainer);