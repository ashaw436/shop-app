import React, { useState } from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'


import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
import CartReducer from './store/reducers/cart';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: CartReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.log}
      />
    );
  }

  return (

    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

