import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontWeight: '500',
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontWeight: '500',
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  errorMessage: {
    color: COLORS.tertiary,
    textAlign: 'center',
  },
});

export default styles;
