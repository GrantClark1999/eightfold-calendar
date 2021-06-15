import { useState } from 'react';
import { animated as a } from 'react-spring';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFlipVertical } from '@hooks/Transitions';
import { useUsers } from '@hooks/UsersContext';

import UserList from '../UserList';

export default function Profile({ activeId, onSelect }: ProfileProps) {
  const [open, setOpen] = useState(false);
  const { users } = useUsers();

  const activeUser = users[activeId];

  // Animations
  const chevronStyles = useFlipVertical(open);

  const toggleOpen = () => setOpen((isOpen) => !isOpen);

  return (
    <button
      className="relative flex flex-shrink-0 items-center px-4 w-full h-24 text-left bg-white border-transparent rounded-none shadow-lg"
      onClick={toggleOpen}
    >
      {/* Active User Avatar */}
      <img
        className="mr-4 w-16 h-16 rounded-full"
        src={activeUser.picture}
        alt={`${activeUser.firstName} ${activeUser.lastName}`}
      />

      {/* Active User Info */}
      <span className="flex flex-col flex-grow">
        <h4>
          {activeUser.firstName} {activeUser.lastName}
        </h4>
        <h4 className="text-blue-500">{activeUser.job}</h4>
      </span>

      {/* Dropdown Icon */}
      <a.div className="flex-shrink-0" style={chevronStyles}>
        <FontAwesomeIcon icon={faChevronUp} size="lg" />
      </a.div>

      {/* Dropdown Menu */}
      <UserList
        show={open}
        selected={activeId}
        onSelect={(userId) => {
          onSelect(userId);
          setOpen(false);
        }}
      />
    </button>
  );
}

type ProfileProps = {
  activeId: string;
  onSelect: (userId: string) => void;
};
