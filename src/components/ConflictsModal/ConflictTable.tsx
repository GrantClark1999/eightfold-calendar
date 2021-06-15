import { MeetingData } from '@data';
import { useUsers } from '@hooks/UsersContext';

const tableHeaders = ['Date', 'Start Time', 'End Time', 'People'];

export default function ConflictTable({ children }: ConflictTableProps) {
  const { users } = useUsers();

  return (
    <table className="mb-4 mt-8 text-left">
      <thead>
        <tr>
          {tableHeaders.map((heading) => (
            <th key={heading} className="text-sm font-medium">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children.map((meeting) => {
          const startDate = new Date(meeting.startTime);
          const endDate = new Date(meeting.endTime);
          return (
            <tr key={meeting.id}>
              <td>{startDate.toLocaleDateString('en-US')}</td>
              <td>{startDate.toLocaleTimeString('en-US')}</td>
              <td>{endDate.toLocaleTimeString('en-US')}</td>
              <td className="relative z-0 flex mr-4 overflow-hidden -space-x-2">
                <div className="relative z-0 flex mr-4 overflow-hidden -space-x-2">
                  {meeting.userIds.map((userId, idx) => (
                    <img
                      key={userId}
                      className="relative inline-block my-1 w-10 h-10 rounded-full ring-white ring-2"
                      style={{ zIndex: meeting.userIds.length - idx }}
                      src={users[userId].picture}
                      alt={`${users[userId].firstName} ${users[userId].lastName}`}
                    />
                  ))}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

type ConflictTableProps = {
  children: MeetingData[];
};
