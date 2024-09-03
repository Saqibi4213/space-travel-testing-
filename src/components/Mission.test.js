import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Missions from './Missions';
import '@testing-library/jest-dom';
import { join } from '../redux/missions/missionSlice';

const mockMissions = [
  {
    mission_id: '1',
    mission_name: 'Test Mission',
    description: 'Test Description',
    reserved: false,
  },
];

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('Missions Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: mockMissions,
        status: 'succeeded',
      },
    });
  });

  test('show missions', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(getByText('Not a Member')).toBeInTheDocument();
    expect(getByText('Join Mission')).toBeInTheDocument();
    expect(getByText('Test Mission')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });

  test('join mission', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const btnJoin = getByText('Join Mission');
    fireEvent.click(btnJoin);

    expect(store.getActions()).toContainEqual(join('1'));
  });
  test('all missions snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
