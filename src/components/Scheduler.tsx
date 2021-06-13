import { useState } from 'react';

import { UserData } from '../data';
import UserMultiSelect from './UserMultiSelect';

export default function Scheduler({ date }: SchedulerProps) {
  const [participants, setParticipants] = useState<UserData[]>([]);

  // Remove user from participants if already included. Otherwise add user.
  function changeParticipants(user: UserData) {
    setParticipants((prev) =>
      prev.map(({ id }) => id).includes(user.id)
        ? prev.filter(({ id }) => id !== user.id)
        : [...prev, user]
    );
  }

  return (
    <div className="flex-grow mt-8 p-4 w-full bg-white rounded-xl shadow-lg">
      <h1 className="text-blue-500 text-xl font-medium">Schedule Meeting</h1>
      <p className="text-gray-500">
        Plan out team meetings with other employees.
      </p>
      {/* Participant Multiselect */}
      <div className="mt-4">
        <label htmlFor="participants" className="text-sm font-medium">
          Participants
        </label>
        <UserMultiSelect
          id="participants"
          active={participants}
          onSelect={changeParticipants}
        />
      </div>
      {/* Date Display (mm/dd/yyyy) */}
      <div className="mt-4">
        <label htmlFor="date" className="text-sm font-medium">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className="block mt-1 w-1/3 border-gray-300 rounded-md shadow-sm"
          value={date.toISOString().split('T')[0]}
          disabled // We are using the custom monthly day picker to select the day
        />
      </div>
      <div className="flex mt-4">
        {/* Start Time Picker */}
        <div className="w-1/2">
          <label htmlFor="start_time" className="text-sm font-medium">
            Start Time
          </label>
          <input
            type="time"
            name="start time"
            id="start_time"
            className="block mt-1 border-gray-300 rounded-md shadow-sm select-none"
          />
        </div>
        {/* End Time Picker */}
        <div className="w-1/2">
          <label htmlFor="end_time" className="text-sm font-medium">
            End Time
          </label>
          <input
            type="time"
            name="end time"
            id="end_time"
            className="block mt-1 border-gray-300 rounded-md shadow-sm select-none"
          />
        </div>
      </div>
    </div>
  );
}

type SchedulerProps = {
  date: Date;
};
