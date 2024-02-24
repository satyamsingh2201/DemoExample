import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  inner: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default styles;
