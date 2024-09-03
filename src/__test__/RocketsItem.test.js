import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RocketsItem from '../components/RocketsItem';

const mockStore = configureStore([]);

describe('RocketsItem', () => {
  it('renders with default props when props are not provided', () => {
    const store = mockStore({});

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <RocketsItem
          id="1"
          name="Default Rocket"
          description="Default description"
          image="default-rocket.jpg"
          reserved={false}
        />
      </Provider>,
    );

    const rocketName = getByText('Default Rocket');
    const rocketDescription = getByText('Default description');
    const rocketImage = getByAltText('rocket');

    expect(rocketName).toBeDefined();
    expect(rocketDescription).toBeDefined();
    expect(rocketImage).toBeDefined();
  });

  it('renders with provided props when props are provided', () => {
    const store = mockStore({});

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <RocketsItem
          id="2"
          name="Rocket 2"
          description="Rocket description 2"
          image="rocket2.jpg"
          reserved
        />
      </Provider>,
    );

    const rocketName = getByText('Rocket 2');
    const rocketDescription = getByText('Rocket description 2');
    const rocketImage = getByAltText('rocket');

    expect(rocketName).toBeDefined();
    expect(rocketDescription).toBeDefined();
    expect(rocketImage).toBeDefined();
  });

  it('displays "Reserved" and "Cancel Reservation" button when reserved prop is true', () => {
    const store = mockStore({});

    const { getByText, getByRole } = render(
      <Provider store={store}>
        <RocketsItem
          id="3"
          name="Rocket 3"
          description="Rocket description 3"
          image="rocket3.jpg"
          reserved
        />
      </Provider>,
    );

    const reservedText = getByText('Reserved');
    const cancelButton = getByRole('button', { name: 'Cancel Reservation' });

    expect(reservedText).toBeDefined();
    expect(cancelButton).toBeDefined();
  });
});
