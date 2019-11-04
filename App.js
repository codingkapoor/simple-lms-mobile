import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneSquareAlt,
  faEnvelope,
  faUserAlt,
  faBox,
  faMapMarkerAlt,
  faBusinessTime,
  faIdBadge
} from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import store from './src/store';

import LeavesContainer from './src/screens/leaves/LeavesContainer';
import ProfileContainer from './src/screens/profile/ProfileContainer';

library.add(fab, faPhoneSquareAlt, faEnvelope, faUserAlt, faBox, faMapMarkerAlt, faBusinessTime, faIdBadge);

const AppNavigator = createBottomTabNavigator({
  Leaves: LeavesContainer,
  Profile: ProfileContainer
});

const App = createAppContainer(AppNavigator);

export default () => {
  return <Provider store={store}>
    <App />
  </Provider>
}; 
