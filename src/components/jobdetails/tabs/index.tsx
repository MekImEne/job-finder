import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {SIZES} from '@src/constants';
import styles from './styles';

type ButtonProps = {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
};

function TabButton({name, activeTab, onHandleSearchType}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}>
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}

type TabsProps = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (item: string) => void;
};

const Tabs = ({tabs, activeTab, setActiveTab}: TabsProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{columnGap: SIZES.small / 2}}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default Tabs;
