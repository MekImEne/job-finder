import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

import {COLORS, FONT, SHADOWS, SIZES} from '../../../../constants';
import {Item} from '.';

interface Styles {
  container: (selectedJob: string, item: Item) => ViewStyle;
  logoContainer: (selectedJob: string, item: Item) => ViewStyle;
  logoImage: ImageStyle;
  companyName: TextStyle;
  infoContainer: ViewStyle;
  jobName: (selectedJob: string, item: Item) => TextStyle;
  infoWrapper: ViewStyle;
  publisher: (selectedJob: string, item: Item) => TextStyle;
  location: TextStyle;
}

const styles = StyleSheet.create({
  container: (selectedJob: string, item: Item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : '#FFF',
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob: string, item: Item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logoImage: {
    width: '70%',
    height: '70%',
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob: string, item: Item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: (selectedJob: string, item: Item) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
} as any);

export default styles as Styles;
