import { createContext, ReactNode, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MeetingData, UserData, users as initialUsers } from '@data';

// Create context with default values
const UsersContext = createContext({
  users: initialUsers,
  createMeeting: (startTime: number, endTime: number, userIds: string[]) => {},
  // removeMeeting: (meetingId: string, userIds: string[]) => {},
  getConflicts: (startTime: number, endTime: number, userIds: string[]) =>
    [] as MeetingData[],
});

// Custom hooks for accessing the context
export const useUsers = () => useContext(UsersContext);

// Context provider to wrap React components that use the above hook
export function UsersProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState(initialUsers);

  function createMeeting(
    startTime: number,
    endTime: number,
    userIds: string[]
  ) {
    const meeting: MeetingData = {
      id: uuidv4(),
      startTime,
      endTime,
      userIds,
    };

    // Update all users' meetings immutably
    setUsers((prevUsers) => {
      const newUsers: Record<string, UserData> = {};
      for (let userId of userIds) {
        newUsers[userId] = {
          ...prevUsers[userId],
          meetings: [...prevUsers[userId].meetings, meeting],
        };
      }
      return { ...prevUsers, ...newUsers };
    });
  }

  // function removeMeeting(meetingId: string, userIds: string[]) {
  //   // Update all users' meetings immutably
  //   setUsers((prevUsers) => {
  //     const newUsers: Record<string, UserData> = {};
  //     for (let userId of userIds) {
  //       newUsers[userId] = {
  //         ...prevUsers[userId],
  //         meetings: prevUsers[userId].meetings.filter(
  //           ({ id }) => id !== meetingId
  //         ),
  //       };
  //     }
  //     return { ...prevUsers, ...newUsers };
  //   });
  // }

  function getConflicts(startTime: number, endTime: number, userIds: string[]) {
    // Get unique set of meetings from all usersIds
    const meetings = new Set<string>();
    for (let userId of userIds) {
      for (let meeting of users[userId].meetings) {
        meetings.add(JSON.stringify(meeting));
      }
    }
    return Array.from(meetings)
      .map((meeting) => JSON.parse(meeting) as MeetingData)
      .filter(
        (meeting) => startTime < meeting.endTime && endTime > meeting.startTime
      );
  }

  return (
    <UsersContext.Provider value={{ users, createMeeting, getConflicts }}>
      {children}
    </UsersContext.Provider>
  );
}
