import clsx from 'clsx';
import { animated as a } from 'react-spring';

import { MeetingData } from '@data';
import { usePopInAndOut } from '@hooks/Transitions';

import ConflictTable from './ConflictTable';

export default function WarningModal({
  show,
  conflicts,
  onCancel,
  onSubmit,
}: WarningModalProps) {
  const modalStyles = usePopInAndOut(show);

  return (
    <a.div
      style={modalStyles}
      className="fixed z-90 -inset-full bg-gray-500 bg-opacity-50"
    >
      <div
        className={clsx(
          'fixed z-100 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2', // Position center of screen
          'flex flex-col justify-center p-8 bg-white rounded-md shadow-lg'
        )}
      >
        {/* Header Information */}
        <h1 className="text-red-500">Scheduling Conflicts</h1>
        <p className="text-gray-500">
          You are about to schedule a meeting that has conflicts with existing
          meetings.
        </p>

        <ConflictTable>{conflicts}</ConflictTable>

        {/* Action Buttons */}
        <div className="flex justify-end mt-4">
          <button
            className="mr-4 hover:text-white hover:bg-red-500 hover:border-transparent"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="text-white bg-green-500 hover:bg-green-600"
            onClick={onSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </a.div>
  );
}

type WarningModalProps = {
  show: boolean;
  conflicts: MeetingData[];
  onCancel: () => void;
  onSubmit: () => void;
};
