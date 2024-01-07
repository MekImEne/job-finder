import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {COLORS} from '@src/constants';
import useFetch from '@src/hooks/useFetch';
import {NavigationProps} from '@src/screens/home';
import styles from './styles';
import NearbyJobCard from '@src/components/common/cards/nearby';

const Nearbyjobs = () => {
  const {data, isLoading, error} = useFetch('search', {
    query: 'React Native developer',
    num_pages: '1',
  });

  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.errorMessage}>Something went wrong</Text>
        ) : (
          data?.map(job => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() =>
                navigation.navigate('JobDetails', {id: job.job_id})
              }
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
