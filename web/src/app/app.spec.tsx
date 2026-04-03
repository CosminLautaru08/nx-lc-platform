import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './app';
import { services } from './data/services';

describe('App', () => {
  it('renders the home hero copy and navigation', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
    expect(
      screen.getByText(/Mai mult luciu\. Interioare curate\. Fara batai de cap\./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Axis Studio/i)).toBeInTheDocument();
  });

  it('renders service sections on the services page', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <App />
      </MemoryRouter>
    );

    services.slice(0, 2).forEach((service) => {
      expect(screen.getByText(service.name)).toBeInTheDocument();
    });
  });
});
