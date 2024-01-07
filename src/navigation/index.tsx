import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Item} from '@src/components/common/cards/popular';
import Home, {NavigationProps} from '@src/screens/home';
import JobDetails from '@src/screens/job_details';
import Search from '@src/screens/search';
import {HeaderBtn} from '../components';
import {COLORS, icons, images} from '../constants';

export type MainStackParamList = {
  Home: undefined;
  Search: {item: Item; id: string};
  JobDetails: {id: string};
};

const {Navigator, Screen} = createNativeStackNavigator<MainStackParamList>();

function NavigationStack() {
  const openDrawer = () => {
    console.log('Open drawer');
  };

  const openProfile = () => {
    console.log('Open profile');
  };

  const navigation = useNavigation<NavigationProps>();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (
            <HeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={openDrawer}
            />
          ),
          headerRight: () => (
            <HeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={openProfile}
            />
          ),

          headerTitle: '',
        }}
        component={Home}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft: () => (
            <HeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={goBack}
            />
          ),
        }}
      />
      <Screen
        name="JobDetails"
        component={JobDetails}
        initialParams={{id: ''}}
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <HeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={goBack}
            />
          ),
          headerRight: () => (
            <HeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              handlePress={() => console.log('share')}
            />
          ),
          headerTitle: '',
        }}
      />
    </Navigator>
  );
}

export default NavigationStack;
