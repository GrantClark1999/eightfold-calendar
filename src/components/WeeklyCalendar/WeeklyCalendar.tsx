import clsx from 'clsx';
import { CSSProperties, useEffect, useState } from 'react';

import { COLORS, DAYS, MeetingData, TIMES } from '@data';
import { useUsers } from '@hooks/UsersContext';

// Get "top" and "height" styles (in px) for a meeting.
function getMeetingStyles({ startTime, endTime }: MeetingData): CSSProperties {
  const midnight = new Date(startTime);
  midnight.setHours(0, 0, 0, 0);
  const startInMins = (startTime - midnight.getTime()) / 60000;
  const durationInMins = (endTime - startTime) / 60000;
  // 60 mins == 56px (24px font-size + 32px margin-bottom)
  return {
    top: (startInMins * 14) / 15,
    height: (durationInMins * 14) / 15,
  };
}

export default function WeeklyCalendar({
  activeId,
  date,
}: WeeklyCalendarProps) {
  const [activeMeetings, setActiveMeetings] = useState<MeetingData[][]>([]);
  const [weekDays, setWeekDays] = useState<Date[]>([]);

  const { users } = useUsers();

  // Prevents unnecessary extra render cycles when date changes within the same week.
  useEffect(() => {
    const dateCopy = new Date(date);
    const newWeekDays = DAYS.map(
      (_, idx) =>
        new Date(dateCopy.setDate(date.getDate() - date.getDay() + idx))
    );
    setWeekDays((prevWeekDays) =>
      prevWeekDays[0]?.getTime() !== newWeekDays[0].getTime()
        ? newWeekDays
        : prevWeekDays
    );
  }, [date]);

  // Set the meetings to display whenever the week changes.
  useEffect(() => {
    const minTime = weekDays[0]?.getTime() ?? 0; // Sunday @ midnight
    const maxTime = minTime + 604800000; // Following Sunday @ midnight
    setActiveMeetings(
      users[activeId]?.meetings
        // Get only meetings for this week
        ?.filter(
          (meeting) =>
            meeting.startTime >= minTime && meeting.endTime <= maxTime
        )
        // Sort to make shorter meetings appear in front of longer meetings
        ?.sort((a, b) => b.endTime - b.startTime - (a.endTime - a.startTime))
        // Make each day of the week have its own array of meetings
        ?.reduce((acc: MeetingData[][], curr: MeetingData) => {
          const dayOfWeek = new Date(curr.startTime).getDay();
          if (!acc[dayOfWeek]) acc[dayOfWeek] = [];
          acc[dayOfWeek].push(curr);
          return acc;
        }, []) ?? []
    );
  }, [activeId, weekDays, users]);

  return (
    <div className="relative px-4 w-full overflow-x-scroll overflow-y-auto card-lg">
      {/* Day Headers */}
      <div className="sticky z-10 top-0 flex justify-around mb-4 pl-24 pt-4 text-center bg-white overflow-x-hidden">
        {weekDays.map((weekday) => (
          <div key={weekday.getTime()} className="w-full min-w-16">
            <p className="text-gray-400 text-sm font-medium">
              {DAYS[weekday.getDay()].slice(0, 3)}
            </p>
            <h1 className="text-blue-500">{weekday.getDate()}</h1>
          </div>
        ))}
      </div>
      <div className="flex">
        {/* Times */}
        <div className="flex-col flex-shrink-0 justify-between mr-4 w-20 h-full text-right">
          {TIMES.map((time) => (
            <p key={time} className="mb-8">
              {time}
            </p>
          ))}
        </div>
        {/* Meetings */}
        <div className="flex flex-1 justify-around border-r border-gray-200">
          {DAYS.map((_, idx) => (
            <div
              key={idx}
              className="relative flex-1 min-w-16 border-l border-gray-200"
            >
              {activeMeetings[idx]?.map((meeting, meetingNum) => (
                <div
                  key={meeting.id}
                  className={clsx(
                    'absolute z-100 left-0 right-0 hover:bg-opacity-100 bg-opacity-50 transform hover:scale-105 transition duration-300 card-md',
                    `${COLORS[meetingNum % COLORS.length]}`
                  )}
                  style={getMeetingStyles(meeting)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type WeeklyCalendarProps = {
  activeId: string;
  date: Date;
};
