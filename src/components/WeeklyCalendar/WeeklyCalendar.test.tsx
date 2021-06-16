import { render } from '@testing-library/react';

import WeeklyCalendar from './WeeklyCalendar';

test('renders with invalid id', () => {
  render(<WeeklyCalendar activeId="" date={new Date()} />);
});
