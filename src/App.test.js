import { render, screen } from '@testing-library/react';
import App from './App';
import FLoorPlan from './FloorPlan';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


export default FLoorPlan