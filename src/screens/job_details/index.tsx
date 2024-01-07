/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  Specifics,
} from '@src/components';
import {COLORS} from '@src/constants';
import useFetch from '@src/hooks/useFetch';
import {MainStackParamList} from '@src/navigation';
import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

export type JobProps = NativeStackScreenProps<MainStackParamList, 'JobDetails'>;

const JobDetails = ({route}: JobProps) => {
  const {data, isLoading, error, refetch} = useFetch('job-details', {
    job_id: route?.params?.id,
  });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualifications':
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ['N/A']}
          />
        );

      case 'About':
        return (
          <JobAbout info={data[0].job_description ?? 'No data provided'} />
        );

      case 'Responsibilities':
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.errorMessage}>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data available</Text>
        ) : (
          <View style={styles.company}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />

            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter
        url={
          data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'
        }
      />
    </SafeAreaView>
  );
};

export default JobDetails;
