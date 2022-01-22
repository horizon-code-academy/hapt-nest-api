import  Session  from '../../src/session/session.interface';

export const session: Session = {
  name: 'Dev16',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2022, 3, 20),
  teacher: [
    {
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
    },
  ],
  students: [
    {
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
    },
  ],
  subject: {
    name: 'React',
    field: 'string',
    nb_hour: 300,
    price_hour: 15,
    description: 'React , redux , hooks ,  router',
  },
};
