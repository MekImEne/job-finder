import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS, SIZES} from '../../../constants';

interface Styles {
  container: ViewStyle;
  userName: TextStyle;
  welcomeMessage: TextStyle;
  searchContainer: ViewStyle;
  searchWrapper: ViewStyle;
  searchInput: TextStyle;
  searchBtn: ViewStyle;
  searchBtnImage: ViewStyle | ImageStyle;
  tabsContainer: ViewStyle;
  tab: (activeJobType: string, item: string) => ViewStyle;
  tabText: (activeJobType: string, item: string) => TextStyle;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  userName: {
    fontWeight: 'normal',
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontWeight: 'bold',
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    height: '100%',
  },
  searchInput: {
    fontWeight: 'normal',
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: '100%',
    marginTop: SIZES.medium,
  },
  tab: (activeJobType: string, item: string) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType: string, item: string) => ({
    fontWeight: '500',
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
} as any);

export default styles as Styles;
