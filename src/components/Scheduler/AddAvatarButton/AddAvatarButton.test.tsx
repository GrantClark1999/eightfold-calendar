import { UsersProvider } from '@hooks/UsersContext';
import { render } from '@testing-library/react';

import AddAvatarButton from './';

test('renders without error', () => {
  render(
    <UsersProvider>
      <AddAvatarButton isAdding toggleAdding={() => {}} />
    </UsersProvider>
  );
  expect(document.getElementById('add-user')).toBeInTheDocument();
});
