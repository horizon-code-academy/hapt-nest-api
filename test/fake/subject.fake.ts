import Subject from '../../src/subject/subject.interface';

export const subject: Subject = {
  _id: '1',
  name: 'React',
  field: 'IT',
  nb_hour: 340,
  price_hour: 15,
  description: 'React , TS , hooks ,  router',
};

const subjectA: Subject = {
  _id: '2',
  name: 'MongoDB',
  field: 'IT',
  nb_hour: 390,
  price_hour: 15,
  description: 'React , find , post ,  aggregation',
};
const subjectB: Subject = {
  _id: '3',
  name: 'NodeJs',
  field: 'IT',
  nb_hour: 350,
  price_hour: 15,
  description: 'httpRequest , redux , hooks ,  router',
};

export const subjectList: Subject[] = [subjectA, subjectB, subject];
