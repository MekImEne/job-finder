import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Nearbyjobs, Popularjobs, Welcome} from '../../components';
import styles from './styles';
import {COLORS} from '@src/constants';

export type NavigationProps = NavigationProp<ParamListBase>;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                navigation.navigate('Search', {id: searchTerm});
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
