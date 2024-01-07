import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {COLORS, SIZES} from '../../../constants';

interface Styles {
  btnContainer: ViewStyle;
  btnImg: (dimension: string) => ImageStyle | ViewStyle;
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: (dimension: string) =>
    ({
      width: dimension,
      height: dimension,
      borderRadius: SIZES.small / 1.25,
    } as ImageStyle | ViewStyle),
} as any);

export default styles as Styles;
