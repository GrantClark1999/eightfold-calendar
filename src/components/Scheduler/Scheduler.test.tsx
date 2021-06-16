import { users } from '@data';
import { UsersProvider } from '@hooks/UsersContext';
import { fireEvent, render } from '@testing-library/react';

import Scheduler from './';

const date = new Date('2021-01-01T00:00');

const testUserId = Object.keys(users)[0];
const SchedulerTest = () => (
  <UsersProvider>
    <Scheduler activeId={testUserId} date={date} />
  </UsersProvider>
);

test('renders without error', () => {
  const { getByText } = render(<SchedulerTest />);
  expect(getByText('Schedule Meeting')).toBeInTheDocument();
});

test('renders correct date', () => {
  const { getByDisplayValue } = render(<SchedulerTest />);
  expect(getByDisplayValue('2021-01-01')).toBeInTheDocument();
});

test('submit without times', () => {
  const { getByText } = render(<SchedulerTest />);

  // Should not be invalid here
  expect(document.getElementsByClassName('border-red-500')).toHaveLength(0);

  // Click "Schedule"
  const scheduleButton = getByText('Schedule');
  expect(scheduleButton).toBeInTheDocument();
  fireEvent.click(scheduleButton);

  // Should be invalid
  expect(document.getElementsByClassName('border-red-500')).toHaveLength(2);
});
