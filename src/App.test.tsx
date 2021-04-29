import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('render addContactButton in App component', () => {
  const { queryByTestId } = render(<App />);
  const addContactButton = queryByTestId("add-contact-button")
  expect(addContactButton).toBeInTheDocument();
});

test('drawer component not in App component on render', () => {
  const { queryByTestId } = render(<App />);
  const addContactDrawer = queryByTestId("add-contact-drawer")
  expect(addContactDrawer).not.toBeInTheDocument();
});

test('render drawer component not in App component on render', () => {
  const { queryByTestId } = render(<App />);
  const addContactButton = queryByTestId("add-contact-button")
  fireEvent.click(addContactButton)

  const addContactDrawer = queryByTestId("add-contact-drawer")
  expect(addContactDrawer).toBeInTheDocument()
});
