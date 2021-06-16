import { UsersProvider } from '@hooks/UsersContext';
import { render } from '@testing-library/react';

import ParticipantsInput from './';

test('renders user in list', () => {
  const { getByText } = render(
    <UsersProvider>
      <ParticipantsInput selectedIds={new Set(['e7f3abde-440b-4532-8b42-5534c6ee17eb'])} onSelect={() => {}} />
    </UsersProvider>
  );
  expect(getByText('Jeffrey Newman')).toBeInTheDocument();
});