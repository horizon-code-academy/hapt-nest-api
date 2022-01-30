import User from '../../src/user/user.interface';

export const user: User = {
  _id: '1',
  email: 'salemlokmani99@gmail.com',
  password: 'salem12',
  phone: '29375379',
  roles: ['student'],
  firstName: 'salem',
  lastName: 'lokmani',
  birthDay: new Date(2000, 7, 30),
  address: 'sousse',
  avatar:
    'https://www.facebook.com/photo/?fbid=3103877833174994&set=a.1383184318577696',
};

export const userA: User = {
  _id: '2',
  email: 'malekbouba@gmail.com',
  password: 'malek',
  phone: '21263360',
  roles: ['teacher'],
  firstName: 'Malek',
  lastName: 'Boubakri',
  birthDay: new Date(1993, 7, 12),
  address: 'Medenine',
};

export const userB: User = {
  email: 'khairi@gmail.com',
  password: 'khairi',
  phone: '96315379',
  roles: ['student'],
  firstName: 'khairi',
  lastName: 'lokmani',
  birthDay: new Date(1997, 7, 30),
  address: 'sousse',
};

export const userList = [user, userA, userB];
