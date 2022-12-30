// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';

import App from './App';
import Nav from './Nav';
import Cart from './shop/Cart';
import { ItemOverview } from './shop/ItemOverview';
import { Item } from './shop/Item';

// need to provide specific props to render correct item
describe('Shopping cart', () => {
  it('renders correct subtotal', () => {
    render(<Item />);

    const plusButton = screen.getByRole('button', { name: '+' });
    const addButton = screen.getByRole('button', { name: 'Add to Cart' });
  });
});
