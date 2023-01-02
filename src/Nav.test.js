import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import RouteSwitch from './RouteSwitch';
import Cart from './shop/Cart';

test('Increment button successfully increments', () => {
  render(<RouteSwitch />);
  expect(screen.getByText('Home')).toBeInTheDocument();

  const shopLink = screen.getByRole('link', { name: /shop/i });

  userEvent.click(shopLink);

  const incrementButtons = screen.getAllByRole('button', { name: '+' });

  const beefIncrement = incrementButtons[0];

  userEvent.click(beefIncrement);

  expect(screen.getByDisplayValue(1)).toBeInTheDocument();
});

// test('"Add to cart" button affects cart', () => {
//   render(<RouteSwitch />);
//   expect(screen.getByText('Home')).toBeInTheDocument();

//   const shopLink = screen.getByRole('link', { name: /shop/i });

//   userEvent.click(shopLink);

//   const incrementButtons = screen.getAllByRole('button', { name: '+' });

//   const beefIncrement = incrementButtons[0];

//   userEvent.click(beefIncrement);

//   const cartButtons = screen.getAllByRole('button', { name: /add to cart/i });

//   const beefCart = cartButtons[0];

//   screen.debug(beefCart);

//   userEvent.click(beefCart);
// });

test('Correctly renders cart', () => {
  render(<RouteSwitch />);

  const cartLink = screen.getByRole('link', { name: /cart/i });

  userEvent.click(cartLink);

  expect(screen.getByText('Grand Total: 0')).toBeInTheDocument();
});
