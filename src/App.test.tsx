import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { WrappedApp, App } from './App';

interface Props {
  children: ReactNode;
}

const wrapper = ({ children }: Props) => {
  return (
    <MemoryRouter initialEntries={['/wrong-path']}>{children}</MemoryRouter>
  );
};

describe('App', () => {
  test('Render Page One', () => {
    const { getByTestId } = render(<WrappedApp />);
    expect(getByTestId('card')).toHaveTextContent('Page One');
  });

  test('Renders not found if invalid path', () => {
    const { getByTestId, queryByTestId } = render(<App />, { wrapper });

    expect(queryByTestId('card')).not.toBeInTheDocument();
    expect(getByTestId('not-found')).toHaveTextContent('Not Found');
  });
});
