import { useState } from 'react';
import { animated as a, useSpring, useTransition } from 'react-spring';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UserData, users } from '../data';
import User from './User';

export default function UserMultiSelect({
  id,
  active,
  onSelect,
}: UserMultiSelectProps) {
  const [open, setOpen] = useState(false);

  // Animations
  const chevronStyles = useSpring({
    transform: `rotateZ(${open ? 45 : 0}deg)`,
  });
  const menuStyles = useSpring({
    transform: `rotateX(${open ? 0 : -90}deg)`,
    opacity: open ? 1 : 0,
  });
  const transitions = useTransition(active, {
    keys: (user) => user.id,
    from: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.8 },
    expires: 1,
  });

  return (
    <div
      id={id}
      className="relative flex items-center w-full h-16 bg-white cursor-pointer"
    >
      <div className="relative z-0 flex mr-4 overflow-hidden -space-x-2">
        {transitions((styles, user, _, idx) => (
          <a.img
            className="relative inline-block w-10 h-10 rounded-full ring-white ring-2"
            style={{ zIndex: active.length - idx, ...styles }}
            src={user.picture}
            alt={`${user.firstName} ${user.lastName}`}
          />
        ))}
        <a.button
          className={`flex-shrink-0 w-10 h-10 flex justify-center rounded-full focus:outline-none ring-2 ring-white text-white ${
            open ? 'bg-red-400' : 'bg-green-400'
          }`}
          style={chevronStyles}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <FontAwesomeIcon icon={faPlus} size="lg" className="my-auto" />
        </a.button>
      </div>
      <a.div
        className="absolute left-0 right-0 top-full origin-top"
        style={menuStyles}
      >
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            selected={active.map(({ id }) => id).includes(user.id)}
            onClick={onSelect}
          />
        ))}
      </a.div>
    </div>
  );
}

type UserMultiSelectProps = {
  id: string;
  active: UserData[];
  onSelect: (user: UserData) => void;
};
