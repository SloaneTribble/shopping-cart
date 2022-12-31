import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import RouteSwitch from './RouteSwitch';
import Nav from './Nav';

test('Increment button successfully increments', () => {
  render(<RouteSwitch />);
  expect(screen.getByText('Home')).toBeInTheDocument();

  const shopLink = screen.getByRole('link', { name: 'Shop' });

  userEvent.click(shopLink);

  const incrementButtons = screen.getAllByRole('button', { name: '+' });

  const beefIncrement = incrementButtons[0];

  userEvent.click(beefIncrement);

  expect(screen.getByDisplayValue(1)).toBeInTheDocument();
});
