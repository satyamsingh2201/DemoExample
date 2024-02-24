import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  inner: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    alignSelf: 'center',
    color: 'black',
  },
});

export default styles;
