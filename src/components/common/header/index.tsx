import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

type HeaderButton = {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress: () => void;
};

const HeaderBtn = ({iconUrl, dimension, handlePress}: HeaderButton) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension) as ImageStyle}
      />
    </TouchableOpacity>
  );
};

export default HeaderBtn;
