import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the matchers
import ShellKitTerminal from '../src/index'; // its src/index.js not src/shellkitterminal.js

test('it renders an input field', () => {
  render(<ShellKitTerminal />);
  const inputField = screen.getByPlaceholderText('Enter a command...');

  expect(inputField).toBeInTheDocument();
});
