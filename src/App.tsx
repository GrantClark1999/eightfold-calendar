import { useState } from 'react';

import { UsersProvider, useUsers } from '@hooks/UsersContext';

import {
  MonthlyCalendar,
  Profile,
  Scheduler,
  WeeklyCalendar,
} from './components';

const today = new Date();
today.setHours(0, 0, 0, 0);

export default function App() {
  const { users } = useUsers();
  const [activeUserId, setActiveUserId] = useState(Object.keys(users)[0]);
  const [date, setDate] = useState(today);

  return (
    <UsersProvider>
      <div className="flex p-8 w-screen h-screen bg-gray-200">
        <div className="flex flex-col flex-shrink-0 mr-8 w-96 h-full">
          <Profile activeId={activeUserId} onSelect={setActiveUserId} />
          <MonthlyCalendar activeDay={date} onSelect={setDate} />
          <Scheduler activeId={activeUserId} date={date} />
        </div>
        <WeeklyCalendar activeId={activeUserId} date={date} />
      </div>
    </UsersProvider>
  );
}
