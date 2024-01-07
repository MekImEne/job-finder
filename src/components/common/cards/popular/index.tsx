import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import {checkImageURL} from '@src/utils';

export type Item = {
  employer_logo: string;
  employer_name: string;
  job_id: string;
  job_title: string;
  job_country: string;
  job_publisher: string;
  job_employment_type: string;
  job_highlights: any;
  job_description: string;
  job_google_link: string;
};

type CardProps = {
  item: Item;
  selectedJob: string;
  handleCardPress: (item: Item) => void;
};

const PopularJobCard = ({item, selectedJob, handleCardPress}: CardProps) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.job_publisher} -
          </Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
