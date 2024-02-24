import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  inner: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  inner: {
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10
  }
});

export default styles;
