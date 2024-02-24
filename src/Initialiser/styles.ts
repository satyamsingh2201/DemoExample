import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../style-guide';

interface Styles {
  screen: ViewStyle;
  root: ViewStyle;
  space: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    backgroundColor: colors.gray.white,
  },
  root: {
    flex: 1,
    margin: 15,
    justifyContent: 'center'
  },
  space: {
    marginBottom: 20
  }
});

export default styles;
