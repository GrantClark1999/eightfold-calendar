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
        id: '61b0668b-d5e1-4a68-8913-d7baf7fa96b3',
        startTime: 1623691800000,
        endTime: 1623699000000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
        ],
      },
      {
        id: '0d8e70af-d72d-4036-a706-075ea9a73611',
        startTime: 1623697200000,
        endTime: 1623700800000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
        ],
      },
      {
        id: 'bbdc1678-d6cd-44bc-8853-5f8a1115ac15',
        startTime: 1623708000000,
        endTime: 1623718800000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'ad9aef8d-d78f-4459-941f-befa5b0e0aee',
        startTime: 1623693600000,
        endTime: 1623711600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
        ],
      },
      {
        id: 'a2becff7-834e-45ac-9686-5797f9539889',
        startTime: 1623866400000,
        endTime: 1623877200000,
        userIds: ['e7f3abde-440b-4532-8b42-5534c6ee17eb'],
      },
      {
        id: 'c4aebcfb-2ecc-4ad8-b16a-643fc266c04e',
        startTime: 1623859200000,
        endTime: 1623873600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'cd706a27-4efa-4855-86f4-4ec6ccb4e561',
        startTime: 1623848400000,
        endTime: 1623855600000,
        userIds: ['e7f3abde-440b-4532-8b42-5534c6ee17eb'],
      },
      {
        id: '1a2dd047-591b-4f61-9fc6-afacf29815ea',
        startTime: 1624042800000,
        endTime: 1624060800000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
        ],
      },
      {
        id: 'eec01236-2b2a-43e6-b6c0-84b13653c8e5',
        startTime: 1624021200000,
        endTime: 1624046400000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'cad1ee3e-0560-41b9-bdbe-fefe19936aaa',
        startTime: 1624057200000,
        endTime: 1624071600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
        ],
      },
    ],
  },
  'ffb30fec-f754-4ff2-a50f-8fb3a9060627': {
    firstName: 'Julia',
    lastName: 'Scott',
    job: 'Engineering Intern',
    picture: 'https://i.imgur.com/wGaEfWE.jpg',
    meetings: [
      {
        id: '0d8e70af-d72d-4036-a706-075ea9a73611',
        startTime: 1623697200000,
        endTime: 1623700800000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
        ],
      },
      {
        id: 'bbdc1678-d6cd-44bc-8853-5f8a1115ac15',
        startTime: 1623708000000,
        endTime: 1623718800000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'ad9aef8d-d78f-4459-941f-befa5b0e0aee',
        startTime: 1623693600000,
        endTime: 1623711600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
        ],
      },
      {
        id: 'c4aebcfb-2ecc-4ad8-b16a-643fc266c04e',
        startTime: 1623859200000,
        endTime: 1623873600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'bb607c46-f79b-460c-a5f8-c2b335c4ec0b',
        startTime: 1624046400000,
        endTime: 1624053600000,
        userIds: [
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'eec01236-2b2a-43e6-b6c0-84b13653c8e5',
        startTime: 1624021200000,
        endTime: 1624046400000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'b5c5c126-bd56-47d7-b914-e13be5506ff7',
        startTime: 1624039200000,
        endTime: 1624053600000,
        userIds: [
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
        ],
      },
      {
        id: '64f5c5a2-f535-4d77-a176-ad1b4e1ca20f',
        startTime: 1623974400000,
        endTime: 1623978000000,
        userIds: [
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
        ],
      },
    ],
  },
  'a9498e0d-a414-4721-a9a6-40275e6abd30': {
    firstName: 'Rebecca',
    lastName: 'Weiss',
    job: 'Project Manager',
    picture: 'https://i.imgur.com/etSaT3k.jpg',
    meetings: [
      {
        id: '61b0668b-d5e1-4a68-8913-d7baf7fa96b3',
        startTime: 1623691800000,
        endTime: 1623699000000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
        ],
      },
      {
        id: 'c4aebcfb-2ecc-4ad8-b16a-643fc266c04e',
        startTime: 1623859200000,
        endTime: 1623873600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: '7b3bdbb0-1dad-442b-a589-152c6a4deea6',
        startTime: 1624028400000,
        endTime: 1624057200000,
        userIds: [
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
        ],
      },
      {
        id: 'b5c5c126-bd56-47d7-b914-e13be5506ff7',
        startTime: 1624039200000,
        endTime: 1624053600000,
        userIds: [
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
        ],
      },
      {
        id: '64f5c5a2-f535-4d77-a176-ad1b4e1ca20f',
        startTime: 1623974400000,
        endTime: 1623978000000,
        userIds: [
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
        ],
      },
    ],
  },
  '83b479d0-fed4-4fe4-a9c7-1a3402db5c37': {
    firstName: 'Steven',
    lastName: 'Nguyen',
    job: 'Junior Software Engineer',
    picture: 'https://i.imgur.com/Zdg9jjX.jpg',
    meetings: [
      {
        id: '0d8e70af-d72d-4036-a706-075ea9a73611',
        startTime: 1623697200000,
        endTime: 1623700800000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
        ],
      },
      {
        id: 'ad9aef8d-d78f-4459-941f-befa5b0e0aee',
        startTime: 1623693600000,
        endTime: 1623711600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
        ],
      },
      {
        id: 'c4aebcfb-2ecc-4ad8-b16a-643fc266c04e',
        startTime: 1623859200000,
        endTime: 1623873600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: '7b3bdbb0-1dad-442b-a589-152c6a4deea6',
        startTime: 1624028400000,
        endTime: 1624057200000,
        userIds: [
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
        ],
      },
      {
        id: '1a2dd047-591b-4f61-9fc6-afacf29815ea',
        startTime: 1624042800000,
        endTime: 1624060800000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
        ],
      },
      {
        id: 'b5c5c126-bd56-47d7-b914-e13be5506ff7',
        startTime: 1624039200000,
        endTime: 1624053600000,
        userIds: [
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
        ],
      },
      {
        id: 'cad1ee3e-0560-41b9-bdbe-fefe19936aaa',
        startTime: 1624057200000,
        endTime: 1624071600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
        ],
      },
    ],
  },
  'b24c628a-3325-44de-b8ea-aab099750f7a': {
    firstName: 'Tana',
    lastName: 'Jones',
    job: 'Lead UX Designer',
    picture: 'https://i.imgur.com/nScCM0o.jpg',
    meetings: [
      {
        id: 'bbdc1678-d6cd-44bc-8853-5f8a1115ac15',
        startTime: 1623708000000,
        endTime: 1623718800000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'c4aebcfb-2ecc-4ad8-b16a-643fc266c04e',
        startTime: 1623859200000,
        endTime: 1623873600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
          'a9498e0d-a414-4721-a9a6-40275e6abd30',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'bb607c46-f79b-460c-a5f8-c2b335c4ec0b',
        startTime: 1624046400000,
        endTime: 1624053600000,
        userIds: [
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'eec01236-2b2a-43e6-b6c0-84b13653c8e5',
        startTime: 1624021200000,
        endTime: 1624046400000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'ffb30fec-f754-4ff2-a50f-8fb3a9060627',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
        ],
      },
      {
        id: 'cad1ee3e-0560-41b9-bdbe-fefe19936aaa',
        startTime: 1624057200000,
        endTime: 1624071600000,
        userIds: [
          'e7f3abde-440b-4532-8b42-5534c6ee17eb',
          'b24c628a-3325-44de-b8ea-aab099750f7a',
          '83b479d0-fed4-4fe4-a9c7-1a3402db5c37',
        ],
      },
    ],
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
