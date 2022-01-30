import { Subject } from '../../src/subject/schemas/subject.schema';

export const subject: Subject = {
  name: 'React',
  field: 'IT',
  nb_hour: 340,
  price_hour: 15,
  description: 'React , TS , hooks ,  router',
};

const subjectA: Subject = {
  name: 'MongoDB',
  field: 'IT',
  nb_hour: 390,
  price_hour: 15,
  description: 'React , find , post ,  aggregation',
};
const subjectB: Subject = {
  name: 'NodeJs',
  field: 'IT',
  nb_hour: 350,
  price_hour: 15,
  description: 'httpRequest , redux , hooks ,  router',
};

export const subjectList: Subject[] = [subjectA, subjectB, subject];
