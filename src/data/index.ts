// Constants
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Data (Fake) To Display
// * Names    randomly generated from: https://www.fakenamegenerator.com/
// * Pictures randomly generated from: https://thispersondoesnotexist.com/
export const users: UserData[] = [
  {
    id: 0,
    firstName: 'Jeffrey',
    lastName: 'Newman',
    job: 'Senior Software Architect',
    picture: 'https://i.imgur.com/tktXZ2w.jpg',
    meetings: [],
  },
  {
    id: 1,
    firstName: 'Julia',
    lastName: 'Scott',
    job: 'Engineering Intern',
    picture: 'https://i.imgur.com/wGaEfWE.jpg',
    meetings: [],
  },
  {
    id: 2,
    firstName: 'Rebecca',
    lastName: 'Weiss',
    job: 'Project Manager',
    picture: 'https://i.imgur.com/etSaT3k.jpg',
    meetings: [],
  },
  {
    id: 3,
    firstName: 'Steven',
    lastName: 'Nguyen',
    job: 'Junior Software Engineer',
    picture: 'https://i.imgur.com/Zdg9jjX.jpg',
    meetings: [],
  },
  {
    id: 4,
    firstName: 'Tana',
    lastName: 'Jones',
    job: 'Lead UX Designer',
    picture: 'https://i.imgur.com/nScCM0o.jpg',
    meetings: [],
  },
];

// Type Definitions
export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  job: string;
  picture: string;
  meetings: MeetingData[];
};
export type MeetingData = {
  startTime: number;
  endTime: number;
  users: UserData[];
};
