import { useState } from 'react';
import { animated as a } from 'react-spring';

import UserList from '@components/UserList';
import { useListPopIn } from '@hooks/Transitions';
import { useUsers } from '@hooks/UsersContext';

import { AddAvatarButton } from '../';

export default function ParticipantsInput({
  selectedIds,
  onSelect,
}: ParticipantsInputProps) {
  const [open, setOpen] = useState(false);
  const { users } = useUsers();

  // Add avatar animation
  const avatarTransitions = useListPopIn(selectedIds);

  return (
    <label htmlFor="participants" className="text-sm font-medium">
      Participants
      <div
        id="participants"
        className="relative flex items-center w-full h-16 bg-white cursor-pointer"
      >
        <div className="relative z-0 flex mr-4 overflow-hidden -space-x-2">
          {avatarTransitions((styles, userId, _, idx) => (
            <a.img
              className="relative inline-block w-10 h-10 rounded-full ring-white ring-2"
              style={{ zIndex: selectedIds.size - idx, ...styles }}
              src={users[userId].picture}
              alt={`${users[userId].firstName} ${users[userId].lastName}`}
            />
          ))}
          <AddAvatarButton
            isAdding={open}
            toggleAdding={() => setOpen((isOpen) => !isOpen)}
          />
        </div>
        <UserList show={open} selected={selectedIds} onSelect={onSelect} />
      </div>
    </label>
  );
}

type ParticipantsInputProps = {
  selectedIds: Set<string>;
  onSelect: (userId: string) => void;
};
