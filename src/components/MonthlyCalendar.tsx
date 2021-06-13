import { MouseEventHandler, useState } from 'react';

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DAYS, MONTHS } from '../data';

const today = new Date();

function getDays(month: number, year: number) {
  const firstDayOfWeek = new Date(year, month).getDay();
  const numDays = 32 - new Date(year, month, 32).getDate();
  // Add null for all days prior to first day of the month
  const days: any[] = Array.apply(null, Array(firstDayOfWeek)).map(() => null);
  // Add numbered days to array
  for (let i = 1; i < numDays + 1; ++i) days.push(i);

  const formattedDays = [];
  while (days.length) formattedDays.push(days.splice(0, 7));
  return formattedDays;
}

export default function MonthlyCalendar({
  activeDay,
  onSelect,
}: MonthlyCalendarProps) {
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  function decrement() {
    // Negative Modulo Fix: https://stackoverflow.com/a/17323608/9672069
    setMonth((prevMonth) => (((prevMonth - 1) % 12) + 12) % 12);
    setYear((prevYear) => prevYear - Number(month === 0));
  }

  function increment() {
    setMonth((prevMonth) => (prevMonth + 1) % 12);
    setYear((prevYear) => prevYear + Number(month === 11));
  }

  return (
    <div className="mt-8 p-4 w-full text-center bg-white rounded-xl shadow-lg">
      {/* Month & Year Selector */}
      <div className="flex items-center justify-between px-4">
        <Arrow direction="left" onClick={decrement} />
        <h1 className="text-xl font-semibold">
          {MONTHS[month]} {year}
        </h1>
        <Arrow direction="right" onClick={increment} />
      </div>
      {/* Day Selector */}
      <table className="mt-4 w-full">
        <thead>
          <tr>
            {DAYS.map((day) => (
              <th key={day} className="w-1/7 text-gray-800 font-medium">
                {day[0]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getDays(month, year).map((row, idx) => (
            <tr key={idx}>
              {row.map((day, idx) => {
                const date = new Date(year, month, day).toDateString();
                const active = day && (date === activeDay.toDateString());
                const isToday = day && (date === today.toDateString());

                return (
                  <td
                    key={idx}
                    className={`py-3 rounded-full ${
                      isToday
                        ? 'font-medium text-white bg-blue-500 hover:bg-blue-600'
                        : active
                        ? 'font-medium text-blue-700 bg-blue-300 hover:bg-blue-400'
                        : 'hover:font-medium hover:text-blue-700 hover:bg-blue-300'
                    }`}
                    onClick={() => onSelect(new Date(year, month, day))}
                  >
                    {day}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type MonthlyCalendarProps = {
  activeDay: Date;
  onSelect: (day: Date) => void;
};

// Helper React Component to help de-clutter
function Arrow({ direction, onClick }: ArrowProps) {
  return (
    <div
      className="flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={direction === 'left' ? faChevronLeft : faChevronRight}
        className="text-blue-400"
        size="lg"
      />
    </div>
  );
}

type ArrowProps = {
  direction: 'left' | 'right';
  onClick: MouseEventHandler<HTMLDivElement>;
};
