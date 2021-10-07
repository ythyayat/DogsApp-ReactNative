import 'react-native-gesture-handler';
import React from 'react';
import AppStack from './src/navigation/AppStack';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <AppStack/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
