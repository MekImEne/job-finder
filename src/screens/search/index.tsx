/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NearbyJobCard} from '@src/components';
import {Item} from '@src/components/common/cards/popular';
import {COLORS, SIZES, icons} from '@src/constants';
import {MainStackParamList} from '@src/navigation';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationProps} from '../home';
import styles from './styles';

export type SearchProps = NativeStackScreenProps<MainStackParamList, 'Search'>;

const Search = ({route}: SearchProps) => {
  const {id} = route?.params ?? {};

  const navigation = useNavigation<NavigationProps>();

  const [searchResult, setSearchResult] = useState<Item[]>([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const navigateToJob = (item: Item) => {
    navigation.navigate('JobDetails', {id: item.job_id});
  };

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          'X-RapidAPI-Key': '',
          //'8330112d6cmsh168eac712cb8339p12e5ebjsn7e1552dc02ba',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
        params: {
          query: id,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error: any) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction: string) => {
    if (direction === 'left' && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === 'right') {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <FlatList
        data={searchResult}
        renderItem={({item}) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() => navigateToJob(item)}
          />
        )}
        keyExtractor={item => item.job_id}
        contentContainerStyle={{padding: SIZES.medium, rowGap: SIZES.medium}}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{id}</Text>
              <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
            </View>
            <View style={styles.loaderContainer}>
              {searchLoader ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : (
                searchError && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination('left')}>
              <Image
                source={icons.chevronLeft}
                style={styles.paginationImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination('right')}>
              <Image
                source={icons.chevronRight}
                style={styles.paginationImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
