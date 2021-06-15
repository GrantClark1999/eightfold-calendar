import { MouseEventHandler } from 'react';

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Arrow({ direction, onClick }: ArrowProps) {
  return (
    <button
      className="flex items-center justify-center w-8 h-8 bg-white border-transparent rounded-full"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={direction === 'left' ? faChevronLeft : faChevronRight}
        className="text-blue-400"
        size="lg"
      />
    </button>
  );
}

type ArrowProps = {
  direction: 'left' | 'right';
  onClick: MouseEventHandler<HTMLButtonElement>;
};
