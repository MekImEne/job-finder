import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const About = ({info}: {info: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
