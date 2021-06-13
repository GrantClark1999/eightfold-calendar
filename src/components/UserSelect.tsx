import { useState } from 'react';
import { animated as a, useSpring } from 'react-spring';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UserData, users } from '../data';
import User from './User';

export default function UserSelect({ active, onSelect }: UserSelectProps) {
  const [open, setOpen] = useState(false);

  // Animations
  const chevronStyles = useSpring({
    transform: `rotateX(${open ? 180 : 0}deg)`,
  });
  const menuStyles = useSpring({
    transform: `rotateX(${open ? 0 : -90}deg)`,
    opacity: open ? 1 : 0,
  });

  return (
    <div
      className="relative flex items-center px-4 w-full h-24 bg-white shadow-lg cursor-pointer"
      onClick={() => setOpen((isOpen) => !isOpen)}
    >
      <img
        className="mr-4 w-16 h-16 rounded-full"
        src={active.picture}
        alt={`${active.firstName} ${active.lastName}`}
      />
      <span className="flex flex-col flex-grow">
        <p className="font-medium">
          {active.firstName} {active.lastName}
        </p>
        <p className="text-blue-500 font-medium">{active.job}</p>
      </span>
      <a.p className="flex-shrink-0" style={chevronStyles}>
        <FontAwesomeIcon icon={faChevronUp} size="lg" />
      </a.p>
      <a.div
        className="absolute left-0 right-0 top-full origin-top"
        style={menuStyles}
      >
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            selected={user.id === active.id}
            onClick={(user) => {
              onSelect(user);
              setOpen(false);
            }}
          />
        ))}
      </a.div>
    </div>
  );
}

type UserSelectProps = {
  active: UserData;
  onSelect: (user: UserData) => void;
};
