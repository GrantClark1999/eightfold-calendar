import { render } from '@testing-library/react';

import DateDisplay from './';

const date = new Date('2021-01-01T00:00');

test('renders without error', () => {
  const { getByDisplayValue } = render(<DateDisplay date={date} />);
  expect(getByDisplayValue('2021-01-01')).toBeInTheDocument();
});
