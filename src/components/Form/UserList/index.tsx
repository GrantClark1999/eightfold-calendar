import { animated as a } from 'react-spring';

import { useDropMenu } from '@hooks/Transitions';
import { useUsers } from '@hooks/UsersContext';

import User from './User';

export default function UserList({ show, selected, onSelect }: UserListProps) {
  const { users } = useUsers();

  const menuStyles = useDropMenu(show);

  return (
    <a.div
      className="absolute left-0 right-0 top-full origin-top"
      style={menuStyles}
    >
      {Object.entries(users).map(([userId, user]) => (
        <User
          key={userId}
          user={user}
          selected={
            typeof selected === 'string'
              ? selected === userId
              : selected.has(userId)
          }
          onClick={() => onSelect(userId)}
        />
      ))}
    </a.div>
  );
}

type UserListProps = {
  show: boolean;
  selected: Set<string> | string;
  onSelect: (userId: string) => void;
};
