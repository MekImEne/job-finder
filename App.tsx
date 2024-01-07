import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavigationStack from './src/navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

export default App;
