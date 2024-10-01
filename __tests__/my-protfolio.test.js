// __tests__/Navbar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/components/Navbar';

// Mock the setDarkMode function
const mockSetDarkMode = jest.fn();

describe('Navbar Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Navbar darkMode={false} setDarkMode={mockSetDarkMode} />
      </Router>
    );
  });

  test('renders navbar and menu items', () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
  });

  test('calls setDarkMode when the toggle button is clicked', () => {
    const toggleButton = screen.getByRole('button', { name: /theme-toggle-dark-icon/i });
    fireEvent.click(toggleButton);
    expect(mockSetDarkMode).toHaveBeenCalledWith(true); // Check if it toggles to dark mode
  });

  test('navigates to the correct path when menu items are clicked', () => {
    const homeButton = screen.getByText(/Home/i);
    fireEvent.click(homeButton);
    // If you want to test actual navigation, you might want to use a mocking library for navigation or assert the behavior
  });

  test('toggles the mobile menu', () => {
    const burgerButton = screen.getByRole('button', { name: /navbar-burger/i });
    fireEvent.click(burgerButton);
    // Assert the mobile menu is now open
    expect(screen.getByRole('navigation')).toHaveClass('flex');

    fireEvent.click(burgerButton);
    // Assert the mobile menu is now closed
    expect(screen.getByRole('navigation')).toHaveClass('hidden');
  });
});
