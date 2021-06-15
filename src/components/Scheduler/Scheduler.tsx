import { useEffect, useState } from 'react';

import { MeetingData } from '@data';
import { useUsers } from '@hooks/UsersContext';

import ConflictsModal from '../ConflictsModal';
import { DateDisplay, ParticipantsInput, TimeInput } from './';

export default function Scheduler({ activeId, date }: SchedulerProps) {
  const [participants, setParticipants] = useState(new Set<string>([activeId]));
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [readyToSchedule, setReadyToSchedule] = useState(false);
  const [conflicts, setConflicts] = useState<MeetingData[]>([]);
  const [showModal, setShowModal] = useState(false);

  const { createMeeting, getConflicts } = useUsers();

  const isValid = (time: number) => time && startTime < endTime;
  const getTimestamp = (time: number) => date.getTime() + time;

  useEffect(() => {
    setParticipants(new Set<string>([activeId]));
  }, [activeId]);

  function changeParticipants(userId: string) {
    setParticipants((prev) => {
      const newParticipants = new Set(prev);
      // Delete the userId if it already exists, otherwise add it to set
      if (!newParticipants.delete(userId)) newParticipants.add(userId);
      return newParticipants;
    });
  }

  function schedule() {
    setReadyToSchedule(true);
    if (!isValid(startTime) || !isValid(endTime)) return;
    const currConflicts = getConflicts(
      getTimestamp(startTime),
      getTimestamp(endTime),
      Array.from(participants)
    );
    setConflicts(currConflicts);
    if (currConflicts.length) setShowModal(true);
    else confirmMeeting();
  }

  function confirmMeeting() {
    createMeeting(
      getTimestamp(startTime),
      getTimestamp(endTime),
      Array.from(participants)
    );
    // Reset
    setParticipants(new Set<string>([activeId]));
    setReadyToSchedule(false);
    setShowModal(false);
  }

  return (
    <div className="mt-8 p-4 w-full card-xl">
      {/* Header */}
      <h2 className="text-blue-500">Schedule Meeting</h2>
      <p className="text-gray-500">
        Plan out team meetings with other employees.
      </p>

      {/* Participant Multiselect */}
      <div className="mt-4">
        <label htmlFor="participants" className="text-sm font-medium">
          Participants
          <ParticipantsInput
            id="participants"
            selectedIds={participants}
            onSelect={changeParticipants}
          />
        </label>
      </div>

      {/* Show date picked from monthly calendar (mm/dd/yyyy) */}
      <div className="mt-4">
        <DateDisplay date={date} />
      </div>

      {/* Time Selection */}
      <div className="flex mt-4">
        <TimeInput
          label="Start Time"
          className="w-1/2"
          invalid={readyToSchedule && !isValid(startTime)}
          onChange={setStartTime}
        />
        <TimeInput
          label="End Time"
          className="w-1/2"
          invalid={readyToSchedule && !isValid(endTime)}
          onChange={setEndTime}
        />
      </div>

      <button
        type="submit"
        className="mt-4 mx-auto text-white bg-blue-500 hover:bg-blue-600"
        onClick={schedule}
      >
        Schedule
      </button>
      <ConflictsModal
        show={showModal}
        conflicts={conflicts}
        onCancel={() => setShowModal(false)}
        onSubmit={confirmMeeting}
      />
    </div>
  );
}

type SchedulerProps = {
  activeId: string;
  date: Date;
};
