import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/RocketsSlice';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
