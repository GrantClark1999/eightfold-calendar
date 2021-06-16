import clsx from 'clsx';
import { animated as a } from 'react-spring';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRotate45 } from '@hooks/Transitions';

export default function AddAvatarButton({ isAdding, toggleAdding }: AddAvatarButtonProps) {
  // Animations
  const addButtonStyles = useRotate45(isAdding);

  return (
    <a.button
      id="add-user"
      className={clsx(
        'flex flex-shrink-0 justify-center w-10 h-10 text-white rounded-full ring-white ring-2',
        isAdding ? 'bg-red-400' : 'bg-green-400'
      )}
      style={addButtonStyles}
      onClick={toggleAdding}
    >
      <FontAwesomeIcon icon={faPlus} size="lg" className="my-auto" />
    </a.button>
  );
}

type AddAvatarButtonProps = {
  isAdding: boolean;
  toggleAdding: () => void;
};
