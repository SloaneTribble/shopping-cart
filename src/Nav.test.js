import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import RouteSwitch from './RouteSwitch';
import Nav from './Nav';

test('Renders anything', () => {
  render(<RouteSwitch />);

  screen.debug();
  expect(screen.getByText('Home')).toBeInTheDocument();

  const shopLink = screen.getByRole('link', { name: 'Shop' });

  userEvent.click(shopLink);

  screen.debug();
});
