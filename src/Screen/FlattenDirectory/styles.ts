import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  inner: ViewStyle;
  title: TextStyle;
  textCenter: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  inner: {
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default styles;
