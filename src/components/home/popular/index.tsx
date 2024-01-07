import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import PopularJobCard, {Item} from '@src/components/common/cards/popular';
import {COLORS, SIZES} from '@src/constants';
import useFetch from '@src/hooks/useFetch';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@src/screens/home';

const Popularjobs = () => {
  const {data, isLoading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: '1',
  });

  const [selectedJob, setSelectedJob] = useState('');

  const navigation = useNavigation<NavigationProps>();

  const handleCardPress = (item: Item) => {
    navigation.navigate('JobDetails', {id: item.job_id});
    setSelectedJob(item.job_id);
  };

  const renderPopularJobCard = ({item}: {item: Item}) => (
    <PopularJobCard
      item={item}
      selectedJob={selectedJob}
      handleCardPress={handleCardPress}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
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
          <FlatList
            data={data}
            renderItem={renderPopularJobCard}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
