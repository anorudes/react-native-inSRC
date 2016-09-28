import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import Notes from '@containers/Notes';

const scenes = Actions.create(
  <Scene key="app">
    <Scene key="notes" component={Notes} />
  </Scene>
);

export default scenes;
