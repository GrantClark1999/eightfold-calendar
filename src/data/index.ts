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
export const TIMES = [
  '12:00 AM',
  '1:00 AM',
  '2:00 AM',
  '3:00 AM',
  '4:00 AM',
  '5:00 AM',
  '6:00 AM',
  '7:00 AM',
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
  '10:00 PM',
  '11:00 PM',
];

export const COLORS = [
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
];

// Data (Fake) To Display
// * Names    randomly generated from: https://www.fakenamegenerator.com/
// * Pictures randomly generated from: https://thispersondoesnotexist.com/
export const users: Record<string, UserData> = {
  'e7f3abde-440b-4532-8b42-5534c6ee17eb': {
    firstName: 'Jeffrey',
    lastName: 'Newman',
    job: 'Senior Software Architect',
    picture: 'https://i.imgur.com/tktXZ2w.jpg',
    meetings: [
      {
        id: '0d8e70af-d72d-4036-a706-075ea9a73611',
        startTime: 1623697200000,
        endTime: 1623700800000,
        userIds: ['e7f3abde-440b-4532-8b42-5534c6ee17eb'],
      },
    ],
  },
  'ffb30fec-f754-4ff2-a50f-8fb3a9060627': {
    firstName: 'Julia',
    lastName: 'Scott',
    job: 'Engineering Intern',
    picture: 'https://i.imgur.com/wGaEfWE.jpg',
    meetings: [],
  },
  'a9498e0d-a414-4721-a9a6-40275e6abd30': {
    firstName: 'Rebecca',
    lastName: 'Weiss',
    job: 'Project Manager',
    picture: 'https://i.imgur.com/etSaT3k.jpg',
    meetings: [],
  },
  '83b479d0-fed4-4fe4-a9c7-1a3402db5c37': {
    firstName: 'Steven',
    lastName: 'Nguyen',
    job: 'Junior Software Engineer',
    picture: 'https://i.imgur.com/Zdg9jjX.jpg',
    meetings: [],
  },
  'b24c628a-3325-44de-b8ea-aab099750f7a': {
    firstName: 'Tana',
    lastName: 'Jones',
    job: 'Lead UX Designer',
    picture: 'https://i.imgur.com/nScCM0o.jpg',
    meetings: [],
  },
};

export type UserData = {
  firstName: string;
  lastName: string;
  job: string;
  picture: string;
  meetings: MeetingData[];
};

export type MeetingData = {
  id: string;
  startTime: number;
  endTime: number;
  userIds: string[]; // array of user ids
};
