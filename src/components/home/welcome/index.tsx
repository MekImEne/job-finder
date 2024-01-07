import {SIZES, icons, jobTypes} from '@src/constants';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageStyle,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@src/screens/home';

type Props = {
  searchTerm: string;
  setSearchTerm: (text: string) => void;
  handleClick: () => void;
};

const Welcome = ({searchTerm, setSearchTerm, handleClick}: Props) => {
  const [activeJobType, setActiveJobType] = useState('Full-time');
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Imane</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage as ImageStyle}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                navigation.navigate('Search', {id: item});
              }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
