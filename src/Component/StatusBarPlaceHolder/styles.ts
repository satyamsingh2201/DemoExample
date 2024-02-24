import { StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { getStatusBarHeight } from 'react-native-safearea-height';
import isIOS from '../../helpers/isIOS';

const styles = StyleSheet.create({
  statusBar: {
    width: '100%',
    backgroundColor: 'black',
    height:
      isIOS && DeviceInfo.hasNotch() ? getStatusBarHeight() : 20,
  }
});

export default styles;
