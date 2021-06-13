import { useState } from 'react';

import {
  MonthlyCalendar,
  Scheduler,
  UserSelect,
  WeeklyCalendar,
} from './components';
import { users } from './data';

export default function App() {
  const [activeUser, setActiveUser] = useState(users[0]);
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex p-8 w-screen h-screen text-gray-700 bg-gray-200 select-none">
      <div className="flex flex-col flex-shrink-0 mr-8 w-96 h-full">
        <UserSelect active={activeUser} onSelect={setActiveUser} />
        <MonthlyCalendar activeDay={date} onSelect={setDate} />
        <Scheduler date={date} />
      </div>
      <div className="flex-grow flex-shrink bg-blue-500">
        <WeeklyCalendar />
      </div>
    </div>
  );
}
