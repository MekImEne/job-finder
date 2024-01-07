import {COLORS, SIZES} from '@src/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.lightWhite},
  errorMessage: {
    color: COLORS.tertiary,
    textAlign: 'center',
  },
  company: {padding: SIZES.medium, paddingBottom: 100},
});

export default styles;
