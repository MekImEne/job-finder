import {COLORS, SIZES} from '@src/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  searchTitle: {
    fontWeight: 'bold',
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  noOfSearchedJobs: {
    marginTop: 2,
    fontWeight: '500',
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  loaderContainer: {
    marginTop: SIZES.medium,
  },
  footerContainer: {
    marginTop: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.tertiary,
  },
  paginationImage: {
    width: '60%',
    height: '60%',
    tintColor: COLORS.white,
  },
  paginationTextBox: {
    width: 30,
    height: 30,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  paginationText: {
    fontWeight: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});

export default styles;
