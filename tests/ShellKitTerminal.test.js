import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShellKitTerminal from '../src/index'; // Adjust the import path accordingly

test('it renders an input field', () => {
  const { getByPlaceholderText } = render(<ShellKitTerminal />);
  const inputField = getByPlaceholderText('Enter a command...');

  expect(inputField).toBeInTheDocument();
});

// Add more test cases as you develop your library
